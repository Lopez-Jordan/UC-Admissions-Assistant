import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { createClient } from '@supabase/supabase-js'
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import fs from "fs/promises";


const sbApiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6Y2pmemNvd3FpaHZxZmZkaXBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3ODYwMzIsImV4cCI6MjAxNjM2MjAzMn0.4tXulAp3PihSFgyJtFZUGBQZr1VmFZ1daUJ-iyWl9RA"
const sbUrl = "https://wzcjfzcowqihvqffdipc.supabase.co";
const openAIApiKey = "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";



async function readFileAsync() {
    try {
        const data1 = await fs.readFile("admission-info.txt", "utf-8");    // bringing in the 'scrimba-info.txt' file here
        const data2 = await fs.readFile("admission-info2.txt", "utf-8");    

        const splitter = new RecursiveCharacterTextSplitter({
            chunkSize: 500,
            separators: ['\n\n', '\n', ' ', ''],
            chunkOverlap: 50
        });

        const output = await splitter.createDocuments([data1, data2]);  // output after splitting the 'scrimba-info.txt'

        const client = createClient(sbUrl, sbApiKey);


        await SupabaseVectorStore.fromDocuments(
            output,                                             // putting output into our vector store 
            new OpenAIEmbeddings({ openAIApiKey }),
            {
               client,
               tableName: 'documents',
            }
        )
    } catch (error) {
        console.error(error);
    }
}

readFileAsync();
