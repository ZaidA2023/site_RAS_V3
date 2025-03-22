'use server'
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: "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",
});


export default async function fetchData(){
    const page = await notion.pages.retrieve({ 
      page_id: '19231b15-6905-805b-bbdf-d1b06395d05a' 
    });
    return page;
};
