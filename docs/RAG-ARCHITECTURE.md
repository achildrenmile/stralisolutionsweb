# ELK-based RAG Architecture Reference

This document describes a reference architecture for building Retrieval-Augmented Generation (RAG) systems using the Elastic Stack (ELK) as the data backbone, integrated with Large Language Models (LLMs) and OpenWebUI for user interaction.

## Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           Data Sources                                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │Documents │  │  Logs    │  │  APIs    │  │Databases │  │  Web     │      │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘      │
└───────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┘
        │             │             │             │             │
        └─────────────┴─────────────┴──────┬──────┴─────────────┘
                                           │
┌──────────────────────────────────────────▼──────────────────────────────────┐
│                         Ingestion Layer                                      │
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐         │
│  │   Logstash      │    │   Filebeat      │    │  Custom ETL     │         │
│  │   Pipelines     │    │   Agents        │    │  Processors     │         │
│  └────────┬────────┘    └────────┬────────┘    └────────┬────────┘         │
└───────────┼──────────────────────┼──────────────────────┼───────────────────┘
            │                      │                      │
            └──────────────────────┴──────────┬───────────┘
                                              │
┌─────────────────────────────────────────────▼───────────────────────────────┐
│                         Processing Layer                                     │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │                    Chunking & Metadata Extraction                   │    │
│  │  • Recursive text splitting (512-1024 tokens)                      │    │
│  │  • Metadata preservation (source, timestamp, category)             │    │
│  │  • Language detection & normalization                              │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │                    Embedding Generation                             │    │
│  │  • Dense vectors (e.g., multilingual-e5-large, 1024 dims)          │    │
│  │  • Batch processing for efficiency                                  │    │
│  └────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────┘
                                              │
┌─────────────────────────────────────────────▼───────────────────────────────┐
│                         Elasticsearch Cluster                                │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                         Index Strategy                               │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                  │   │
│  │  │  Keyword    │  │   Vector    │  │   Hybrid    │                  │   │
│  │  │  Index      │  │   Index     │  │   Index     │                  │   │
│  │  │  (BM25)     │  │  (HNSW)     │  │  (Combined) │                  │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘                  │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  Mappings: text, dense_vector, metadata fields, timestamps          │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
                                              │
┌─────────────────────────────────────────────▼───────────────────────────────┐
│                         Retrieval Layer                                      │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │                    Query Processing                                 │    │
│  │  • Query embedding (same model as indexing)                        │    │
│  │  • Query expansion / rewriting                                     │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │                    Search Strategies                                │    │
│  │  • Keyword search (BM25) for exact matches                         │    │
│  │  • Vector search (kNN) for semantic similarity                     │    │
│  │  • Hybrid search (RRF) combining both approaches                   │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │                    Reranking                                        │    │
│  │  • Cross-encoder reranking for precision                           │    │
│  │  • Metadata-based filtering & boosting                             │    │
│  └────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────┘
                                              │
┌─────────────────────────────────────────────▼───────────────────────────────┐
│                         LLM Integration Layer                                │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │                    Context Assembly                                 │    │
│  │  • Retrieved chunks → structured context                           │    │
│  │  • Source attribution & citation                                   │    │
│  │  • Context window optimization                                     │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │                    LLM Options                                      │    │
│  │  • OpenAI GPT-4 / GPT-4o                                           │    │
│  │  • Anthropic Claude                                                 │    │
│  │  • Local models via Ollama (Llama, Mistral, etc.)                  │    │
│  └────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────┘
                                              │
┌─────────────────────────────────────────────▼───────────────────────────────┐
│                         User Interface Layer                                 │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │                    OpenWebUI                                        │    │
│  │  • Chat interface with conversation history                        │    │
│  │  • Model selection & parameter tuning                              │    │
│  │  • RAG pipeline integration                                        │    │
│  │  • User authentication & multi-tenancy                             │    │
│  └────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Component Details

### 1. Data Ingestion

**Logstash Pipelines**
- Parse structured and unstructured data
- Apply filters for data cleansing
- Route to appropriate indices based on content type

**Filebeat Agents**
- Lightweight log shipping
- Real-time file monitoring
- Automatic log rotation handling

**Custom ETL**
- API connectors for external systems
- Database change data capture (CDC)
- Web scraping pipelines

### 2. Chunking Strategy

| Strategy | Chunk Size | Overlap | Use Case |
|----------|------------|---------|----------|
| Fixed | 512 tokens | 50 tokens | General documents |
| Recursive | 512-1024 tokens | 10-20% | Technical docs |
| Semantic | Variable | Context-aware | Conversations |
| Sentence | 3-5 sentences | 1 sentence | FAQs |

**Metadata Handling**
```json
{
  "content": "chunk text...",
  "metadata": {
    "source": "document.pdf",
    "page": 5,
    "section": "Introduction",
    "timestamp": "2024-01-15T10:30:00Z",
    "language": "de",
    "category": ["technical", "architecture"]
  },
  "embedding": [0.123, -0.456, ...]
}
```

### 3. Indexing Strategies

**Keyword Index (BM25)**
- Best for exact term matching
- Efficient for known terminology
- Lower computational cost

**Vector Index (HNSW)**
- Semantic similarity search
- Handles synonyms and paraphrasing
- Requires embedding generation

**Hybrid Index (Recommended)**
- Combines BM25 + kNN with Reciprocal Rank Fusion (RRF)
- Best overall retrieval quality
- Balances precision and recall

### 4. Elasticsearch Mapping Example

```json
{
  "mappings": {
    "properties": {
      "content": {
        "type": "text",
        "analyzer": "german"
      },
      "content_vector": {
        "type": "dense_vector",
        "dims": 1024,
        "index": true,
        "similarity": "cosine"
      },
      "metadata": {
        "properties": {
          "source": { "type": "keyword" },
          "timestamp": { "type": "date" },
          "category": { "type": "keyword" }
        }
      }
    }
  }
}
```

### 5. Retrieval Pipeline

```
Query → Embed → Search (Hybrid) → Filter → Rerank → Top-K Results
```

**Hybrid Search Query**
```json
{
  "retriever": {
    "rrf": {
      "retrievers": [
        {
          "standard": {
            "query": { "match": { "content": "query text" } }
          }
        },
        {
          "knn": {
            "field": "content_vector",
            "query_vector": [0.1, 0.2, ...],
            "k": 20,
            "num_candidates": 100
          }
        }
      ]
    }
  }
}
```

### 6. LLM Consumption

**Prompt Template**
```
Context from knowledge base:
---
{retrieved_chunks}
---

Based on the above context, answer the following question.
If the answer cannot be found in the context, say so.

Question: {user_query}
```

**Model Selection Criteria**
| Model | Latency | Quality | Cost | Privacy |
|-------|---------|---------|------|---------|
| GPT-4o | Medium | High | Medium | Cloud |
| Claude | Medium | High | Medium | Cloud |
| Llama 3 (local) | Low | Good | None | Full |
| Mistral (local) | Low | Good | None | Full |

### 7. OpenWebUI Integration

- **RAG Pipeline**: Custom pipeline connecting to Elasticsearch
- **Model Backend**: Ollama for local models, OpenAI/Anthropic for cloud
- **Authentication**: LDAP/OIDC integration for enterprise
- **Multi-tenancy**: Separate namespaces per team/project

## Use Cases

### Knowledge Assistant
- Internal documentation search
- Policy and procedure lookup
- Technical knowledge base

### Log Intelligence
- Error pattern detection
- Root cause analysis
- Anomaly explanation

### Document Q&A
- Contract analysis
- Compliance checking
- Report summarization

## Deployment Considerations

### Infrastructure
- Elasticsearch: 3+ node cluster for production
- Embedding service: GPU-accelerated for throughput
- OpenWebUI: Containerized deployment (Docker/K8s)

### Security
- TLS for all communications
- Role-based access control (RBAC)
- Data encryption at rest
- Audit logging

### Monitoring
- Kibana dashboards for search analytics
- Query latency tracking
- Relevance feedback collection

## References

- [Elasticsearch Vector Search](https://www.elastic.co/guide/en/elasticsearch/reference/current/dense-vector.html)
- [OpenWebUI Documentation](https://docs.openwebui.com/)
- [RAG Best Practices](https://www.anthropic.com/news/retrieval-augmented-generation)
