require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");

let conv_id;
const configuration = new Configuration({
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

run = async (msg) => {
    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            max_tokens: 1024,
            prompt: `You are a PostgresSQL admin of a clothing brand data base, please answer all given questions with an SQL response. The DDL structure of the table is
            CREATE TABLE product (
                id serial4 NOT NULL,
                makat varchar NULL,
                product_type varchar NULL,
                color varchar NULL,
                product_size varchar NULL,
                scan_date timestamp NULL,
                scan_location varchar NULL,
                snif varchar NULL,
                tried_on float4 NULL,
                bought float4 NULL,
                CONSTRAINT id_pk PRIMARY KEY (id)
            );
            here is some information about the fields: 
            makat - unique RFID product identifier,
            product_type - the type of the product,
            color - the color of the product,
            product_size - the size of the product,
            scan_date - when was this RFID scanned,
            scan_location - location in the branch where the RFID was scanned,
            snif - store branch,
            tried_on - boolean identifier. 1 if the custumer has tried the product, 0 if not,
            bought - boolean identifer. 1 if the customer has bought the product, 0 if not
            
            My question is: ${msg}`,
        });
        conv_id = completion.data.id;
        console.log(completion.data.choices);
        return { message: completion.data.choices[0].text.replace(/(\r\n|\n|\r)/gm, "") };
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
    return "I'm sorry there has been an error";
}

module.exports.run = run;