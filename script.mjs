#!/usr/bin/env zx
require('dotenv').config()
import OpenAI from "openai"
import { fs } from "zx";

// Creds
const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_SECRET
});


async function main(amount=5){

    // Get typescript file
    const path = await question("Path of interface file: ")
    
    // Parse file to string
    const schema = fs.readFileSync(__dirname + `/${path}`).toString()

    // call generative function {amount} times
    const completion = await openai.chat.completions.create({
        messages: [
            {"role": "system", "content": "Output JSON formatted mock data based on typescript interfaces."},
            {"role": "user", "content": schema},
            {"role": "assistant", "content": "If multiple interfaces or types, create seperate arrays."},
            {"role": "user", "content": `Create ${amount} of each interface or type within an array` },
        ],
        model: "gpt-3.5-turbo-1106",
        response_format: { type: "json_object" },
    });
    
    const mockData = completion.choices[0].message["content"]

    // Write to JSON file
    const outputPath = "seeds.json"
    fs.writeFile (outputPath, mockData, function(err) {
        if (err) throw err;
        console.log('complete');
        }
    );
    
}


let amount
if(argv._[0]){
    amount = argv._[0]
    main(amount)
} else {
    main()
}

