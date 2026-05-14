import os
import openai
import getpass

os.environ["OPENAI_API_KEY"] = getpass.getpass("Please enter your OpenAI API Key: ")
openai.api_key = os.environ["OPENAI_API_KEY"]

from openai import OpenAI

client = OpenAI()

YOUR_PROMPT = "What is the difference between LangChain and LlamaIndex?"

client.chat.completions.create(
    model="gpt-4.1-nano",
    messages=[{"role" : "user", "content" : YOUR_PROMPT}]
)
from IPython.display import display, Markdown

def get_response(client: OpenAI, messages: str, model: str = "gpt-4.1-nano") -> str:
    return client.chat.completions.create(
        model=model,
        messages=messages
    )

def system_prompt(message: str) -> dict:
    return {"role": "developer", "content": message}

def assistant_prompt(message: str) -> dict:
    return {"role": "assistant", "content": message}

def user_prompt(message: str) -> dict:
    return {"role": "user", "content": message}

def pretty_print(message: str) -> str:
    display(Markdown(message.choices[0].message.content))

    messages = [user_prompt(YOUR_PROMPT)]

chatgpt_response = get_response(client, messages)

pretty_print(chatgpt_response)