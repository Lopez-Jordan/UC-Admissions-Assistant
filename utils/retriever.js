import { SupabaseVectorStore } from 'langchain/vectorstores/supabase'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { createClient } from '@supabase/supabase-js'

const openAIApiKey = "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"
const sbApiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6Y2pmemNvd3FpaHZxZmZkaXBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3ODYwMzIsImV4cCI6MjAxNjM2MjAzMn0.4tXulAp3PihSFgyJtFZUGBQZr1VmFZ1daUJ-iyWl9RA"
const sbUrl = "https://wzcjfzcowqihvqffdipc.supabase.co"



const embeddings = new OpenAIEmbeddings({ openAIApiKey })

const client = createClient(sbUrl, sbApiKey)

const vectorStore = new SupabaseVectorStore(embeddings, {
    client,
    tableName: 'documents',
    queryName: 'match_documents'
})

const retriever = vectorStore.asRetriever()

export { retriever }