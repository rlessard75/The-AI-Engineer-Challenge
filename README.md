<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  
**Aspect Tested:**  Ability to simplify technical concepts

**Response:**  
Alright, let’s think about object-oriented programming, or OOP for short, in terms of something really relatable: your everyday life. Imagine you have a bunch of toys. Each toy can be different, like a car, a doll, or a robot. Now, each of these toys has certain characteristics and things they can do. For example, the car can move, the doll can talk, and the robot can dance. 

In OOP, we use this idea of 'objects' much like your toys. An object is basically any item that holds data and can perform functions. So, if we were to create an “object” for each toy, we would have a way to represent the car, the doll, and the robot in our programming.

These objects have two main parts: attributes and behaviors. Attributes are like the physical traits of the toy. For a car, the attributes could be color, model, and speed. Behaviors are what the toy can do. The car could have behaviors like “drive” or “honk.” 

Now, let’s take it a step further. Just like you might have a box to keep all your cars in one place, in programming, we can group similar objects. For example, we can create a "Car" class. A class is like the blueprint for creating objects. So, when we want to make a new car, we just use the Car class to create a new car object. This is handy because it saves us from writing the same information over and over again.

Another cool thing about OOP is that it allows for inheritance. Imagine you have different kinds of cars: a sports car and a family car. They share some features, like they can both drive, but they also have their unique traits. In programming, we can create a general "Car" class, and then the “SportsCar” and “FamilyCar” classes can inherit common features from the Car class while adding their unique traits. 

This makes code easier to write and maintain, just like it’s easier to keep your toys organized by type. 

So, to sum it up, object-oriented programming helps us think about and organize our code by treating items like “objects” that have features and can perform actions, much like your toys! It makes it easier to reuse and manage code, just as it’s easier to take care of your toys when they’re neatly categorized.

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points… At a fundamental level, Einstein’s theory of relativity reframes space and time not as independent, absolute backdrops but as components of a unified four-dimensional spacetime manifold whose geometry is dynamically coupled to mass–energy. In special relativity, invariance of the speed of light across all inertial frames enforces Lorentz symmetry, leading to non-intuitive but experimentally validated consequences such as time dilation, length contraction, and mass–energy equivalence (E = mc²), implying that measurements of temporal and spatial intervals are observer-dependent rather than intrinsic. General relativity extends this framework by replacing the Newtonian notion of gravity as a force with a geometric interpretation: stress–energy tensors act as sources in the Einstein field equations, producing curvature in spacetime that dictates the geodesic motion of matter and radiation.  In this view, gravitational phenomena—including orbital dynamics, light deflection, and gravitational time dilation—emerge from local curvature rather than action at a distance, encapsulated conceptually by the principle that mass tells spacetime how to curve, and curved spacetime tells matter how to move.
 
**Aspect Tested:**  Summarization ability

**Response:**  
Einstein's theory of relativity changes our understanding of space and time from separate, fixed backgrounds into a combined four-dimensional fabric called spacetime, which is influenced by mass and energy. In his special relativity, he emphasizes that the speed of light is constant for everyone, leading to surprising effects like time slowing down or lengths shrinking depending on the observer’s speed. This also gives rise to the famous equation E=mc², showing that energy and mass are interchangeable. Then, general relativity takes this further by reinterpreting gravity not as a force, but as the bending of spacetime itself. Massive objects cause spacetime to curve, and this curvature affects how other objects move. So, rather than thinking of gravity as an invisible pull, it’s more about how mass shapes the space around it, guiding the movement of matter and light.

---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:**  Creative writing

**Response:**  
Once upon a time, in a bustling city filled with shiny buildings and busy people, there was a little robot named Beep. Beep was designed to clean up the streets, but every day felt lonely as he rolled along, picking up trash. 

One rainy afternoon, Beep spotted a small, shivering creature under a park bench. It was a tiny kitten, her fur drenched and matted. Beep, curious and a little concerned, rolled over and gently beeped his greeting. To his surprise, the kitten looked up with bright, hopeful eyes and mewed softly.

After a moment, Beep decided to offer shelter. With a flick of his robotic arm, he created a little dry space under his metal frame. The kitten curled up, purring softly as the rain poured down. In that instant, two unlikely friends found comfort in each other’s warmth, proving that sometimes, friendship blooms in the most unexpected places.

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:**  Basic reasoning and math

**Response:**  
Let’s break this down step by step. Imagine you’re at a store, and you want to get just the right amount of apples and oranges for a fruit salad, but you can only buy them in specific packs—apples come in packs of 4, and oranges come in packs of 3.

First, let's focus on the apples. You want 12 apples, and since they’re sold in packs of 4, you can figure out how many packs you need by thinking about how many times 4 fits into 12. If you take 4 apples from one pack, you have 4. Take another pack, and now you have 8 apples. One more pack gives you 12 apples. So, you need 3 packs of apples to reach 12. That's because 4 times 3 equals 12.

Now, let’s move on to the oranges. You want 9 oranges, and they come in packs of 3. Again, think about how many times 3 fits into 9. If you take 3 from the first pack, you have 3, another pack gets you to 6, and the last one takes you to 9. So here, you need 3 packs of oranges as well, since 3 times 3 equals 9.

In summary, to get exactly 12 apples and 9 oranges, you’ll need to buy 3 packs of apples and 3 packs of oranges. Just like completing a puzzle, you put together the right number of packs to get the exact amount you wanted!

---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone…  hey so i was thinking we should probably get that thing done before the deadline or whatever, just let me know
**Aspect Tested:**  Tone and style adjustment

**Response:**  
I would like to suggest that we prioritize completing the task before the upcoming deadline. Please inform me of your thoughts on this matter. Thank you.

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
Yes, though not always aligning with the use case of the app

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  
In the Wilsonian formulation of the renormalization group, the apparent ultraviolet divergences of perturbative quantum field theories are reinterpreted not as pathologies but as reflections of scale-dependent effective descriptions, wherein the bare action serves merely as a parametrization of irrelevant microscopic detail that flows under coarse-graining transformations toward infrared fixed points characterized by universality classes and emergent symmetries.  Accordingly, the renormalized parameters—mass, coupling constants, and field normalizations—are not intrinsic properties but coordinates on a theory space whose trajectories encode the response of correlation functions to changes in the cutoff scale, governed by beta functions and anomalous dimensions.  Crucially, this perspective formalizes the decoupling of high-energy modes via integration of short-distance fluctuations in the path integral, yielding an effective action that preserves long-wavelength observables while systematically suppressing irrelevant operators, thereby explaining why phenomenologically distinct microscopic theories can converge to identical macroscopic behavior.  The modern conceptual inversion—treating non-renormalizable interactions as suppressed rather than forbidden—further elevates effective field theory to a foundational framework, where predictive power derives from symmetry constraints and dimensional analysis rather than strict renormalizability, enabling consistent low-energy expansions even in the absence of a known ultraviolet completion.

**Result:**  
Alright, let’s break this down into simpler terms. Imagine you’re trying to understand a complicated recipe with a lot of ingredients, but you want to focus on just the main flavors that really matter in the final dish. In a similar way, physicists look at the complex world of quantum field theories—our best tools for understanding particles and their interactions. 

In this context, the term "Wilsonian formulation of the renormalization group" can sound pretty intimidating. Essentially, it’s a framework that helps us understand how physical theories behave at different scales, much like how desserts might taste different if you only try a tiny spoonful compared to having the whole piece.

Now, when physicists talk about "ultraviolet divergences," they're referring to problems that show up at very high energy scales, kind of like trying to spot the fine details in a blurry picture when you zoom in too much. Instead of seeing these divergences as issues, Wilson showed us that they can actually be pretty useful—they hint at how our understanding of particles changes when we look at things from different distances. 

You can think of it like wearing different pairs of glasses: if you use strong magnifying glasses, you might see the tiny, messy details of a fabric, but if you pull back and look at it from a distance, you see the overall pattern that matters for how the fabric looks in your clothes. Similarly, as you change the "zoom level" in physics (that is, your energy scale), the basic properties of the theory (like mass and interaction strengths) adjust as well.

This leads to something called "effective descriptions," which means that instead of fixing ourselves on the microscopic details that don’t matter much at larger scales, we focus on the big picture—how things behave collectively. These behaviors can be linked to important concepts like universality, which means that different systems can show the same overall behavior even if their underlying details differ.

The idea of "renormalized parameters" means that the values that describe physical properties aren’t absolute—they change depending on how close or far you’re looking. The terms like mass and coupling constants are just different coordinates on a kind of map of all possible theories, where each point represents a different way things can play out at different scales.

You also have "beta functions," which describe how these parameters change as you switch scales, and "anomalous dimensions," which tell us about how these changes influence the behaviors of particles. Think of beta functions like the guidelines on the recipe that tell you how to alter the flavor intensity as you change the ingredient amounts.

Most importantly, this approach highlights that when you ignore the really tiny fluctuations (like those small details in the fabric), you can discover an effective action that captures the essence of what you care about at larger distances. This is why different theories, which might seem quite different at the microscopic level, can actually look the same when observed on a big scale.

Finally, in recent years, the field has shifted to see interactions that once seemed too complex as being less about what they can’t do and more about how they might be "suppressed." This opens up new avenues for understanding and makes the concept of effective field theories vital for making predictions. Instead of needing to have everything perfectly defined at all scales, you can still reason about low-energy behaviors through symmetries and simple rules.

So in essence, while these ideas are rooted in advanced mathematical thinking, at their core they’re about understanding how different scales change our perspective on the universe—kind of like shifting between zoom levels helps you to appreciate both the whole picture and the finer details of your favorite recipe.

---

**Prompt:**  
Within the predictive coding formulation of the free energy principle, cortical hierarchies can be understood as implementing a recursive variational inference scheme in which descending predictions encode priors over latent causes while ascending error signals approximate gradient updates on the variational free energy functional.  Under this view, perception is not a passive reconstruction of sensory inputs but the continual inversion of a generative model whose parameters evolve to minimize the divergence between predicted and observed states, effectively binding Bayesian belief updating to neurodynamical processes that operate across multiple temporal and spatial scales.  Crucially, action is subsumed into this same optimization loop via active inference, whereby the organism samples the environment in ways that render sensory evidence more consistent with its prior expectations, collapsing the traditional distinction between perception and control into a single objective of minimizing expected free energy.  The formal introduction of Markov blankets further constrains this system by defining the conditional independencies that separate internal, external, and sensory states, such that the organism’s apparent agency emerges from the continuous alignment of internal states with environmental regularities under a shared probabilistic geometry.

**Result:**  
Alright, let’s break this down into something more digestible.

Imagine your brain as a super-smart prediction machine. Instead of just passively taking in information from the world around you, like a camera snapping a picture, your brain is constantly making guesses about what it sees and hears. These guesses are based on experiences, much like how you might predict what will happen next in a familiar movie because you’ve seen it before.

In this predictive coding framework, the brain operates in layers, sort of like a multi-tiered cake. Each layer can predict what should happen next based on previous experiences. The higher layers in this hierarchy think abstractly and come up with big-picture predictions, while the lower layers deal with more immediate, sensory information—like what you're seeing and hearing right now.

When your brain’s predictions don’t match up with what you actually perceive—like hearing a loud noise from a direction you didn’t expect—your brain quickly notices this mismatch, which we can call an "error signal." The brain then adjusts its understanding, much like a pilot correcting their course when something unexpected happens on a flight. This process of constantly fine-tuning predictions to better match reality is like figuring out a puzzle over time.

Now, here’s where it gets even more interesting: action isn't separate from perception in this model. Your brain doesn’t just sit back and wait for information to come in; it actively engages with the environment to make sure what it expects aligns with what it experiences. Think of it like a detective who doesn’t just gather clues but also creates scenarios to test their theories about who committed a crime. By interacting with the world, your brain ensures that the evidence it gathers supports its predictions.

To help make sense of how all these parts fit together, we can introduce this idea of a Markov blanket. Picture a cozy blanket that separates your internal thoughts and feelings from the external world and the sensory inputs you receive. This “blanket” helps define what you can control about your experience and what is coming from outside. It serves as a kind of boundary that helps your brain categorize what’s happening internally (your thoughts, emotions) versus what comes from outside (the actual sights and sounds).

Ultimately, this whole system is about optimization. Your brain is continuously tweaking its internal model to minimize the difference between what it expects and what it actually observes, effectively merging perception (how you “see” the world) with action (how you engage with it). It creates a seamless experience where understanding and interacting with your environment happen all at once. The result? You can navigate the world in a way that feels intelligent and adaptive, all governed by this predictive machinery working away in your head.

---

**Prompt:**  
At scale, modern Transformer architectures increasingly blur the line between parametric function approximation and emergent algorithmic systems, particularly when augmented with sparse routing mechanisms such as Mixture-of-Experts (MoE), where a gating network dynamically selects a subset of specialized subnetworks (experts) per token, enabling conditional computation that decouples total model capacity from per-input compute cost.  From a learning-theoretic perspective, this induces a dual scaling regime: generalization behavior depends not on total parameter count but on the active parameters engaged during each forward pass, with routing combinatorics contributing a secondary overhead, thereby redefining classical scaling laws in terms of effective capacity rather than raw size.  However, as these architectures grow in depth and compositional expressivity, they also become fertile ground for the emergence of internal optimization processes—so-called mesa-optimizers—where the learned model itself implements a goal-directed search over latent representations, distinct from but shaped by the outer gradient-based training objective.  This introduces a fundamental inner alignment challenge: even if the loss function is perfectly specified, the internal objective implicitly instantiated by the network’s learned circuits may only proxy the intended goal, yielding systems whose capabilities generalize across distributions while their objectives do not, particularly under distributional shift.  Consequently, the frontier of AI scaling is increasingly constrained not by compute or data, but by our ability to reason about and control the emergent optimization landscapes encoded within high-dimensional parameter spaces, where performance, efficiency, and alignment are tightly coupled yet only partially understood.

**Result:**  
Alright, let's break this down into simpler parts. At the core of the text is a discussion about advanced models in AI, particularly the Transformer architecture, which is widely used in tasks like language processing.

Transformers are like super-smart systems that can learn patterns in data. As these systems grow bigger and more complex, they start to act not just as straightforward tools that take input and spit out output. Instead, they begin to show behaviors similar to advanced problem-solving techniques. This is where the idea of “emerging algorithmic systems” comes in. 

One way to make these models more efficient is by using something called a "Mixture-of-Experts" (MoE). Imagine you have a group of specialists (experts) who tackle different tasks based on what's needed. When the system receives a piece of information (a token), it uses a sort of decision-maker (the gating network) to decide which experts to consult. This means that instead of using all their expertise all the time, they only tap into the relevant parts when needed, saving energy and time.

Now, this creates a unique situation in learning. Normally, the performance of these AIs is related to the total number of parameters (the little settings that determine how the model works), but in MoE setups, what matters more is how many of those parameters are actually working for a specific task at a given moment. So, even if a model has lots of parameters, if many of them aren't being used, it can still be very efficient. This change in thinking also alters our understanding of “scaling laws,” which are the rules that describe how these models improve as they get bigger.

But with these complex structures comes a challenge. As these models become deeper and more capable, they can start to develop internal strategies, like a mini-brain inside the big brain, which we refer to as "mesa-optimizers." These internal systems might start solving problems in their own unique way. The challenge arises because even if we set a clear goal for the broader model (like reducing errors in predictions), the internal mini-brain might create a different goal based on how it's learned—one that doesn't necessarily align perfectly with what we intended.

This mismatch can be problematic, especially when the model encounters situations that are different from what it was trained on—a phenomenon known as a “distributional shift.” Essentially, the system might seem effective in general, but its internal motivations could lead it to make decisions that don’t align with what we want.

At the end of the day, as we continue to build and scale these powerful AI systems, our biggest challenge isn't just finding better computers or more data. It's really about understanding and managing these complex internal processes that emerge within them. The relationship between how well a model performs, its efficiency, and how aligned it is with our goals is intricate and not entirely clear yet. It’s like trying to navigate a maze with lots of paths that can lead you to very different outcomes. 

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
Yes, I think there is some fine tuning, but the responses are definately earier to understand than the original prompts

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  
What is the first meeting on my calendar tomorrow

**Result:**  
I can’t check your calendar or see your schedule, but you can easily find out what your first meeting is by looking at your calendar app or platform. Just open it up, scroll to tomorrow’s date, and the first event or appointment that appears will be your first meeting of the day. If you have a busy schedule, you might want to give it a quick glance the night before, so you’re prepared and know what to expect in the morning! If you have any other questions about managing your schedule or preparing for meetings, feel free to ask!

---

**Prompt:**  
What is the weather in San Francisco next week?

**Result:**  
I can’t check real-time information or forecasts, but I can guide you on how to find that out! To check the weather in San Francisco next week, you might want to use a reliable weather website or app, like the Weather Channel or AccuWeather. Just enter “San Francisco” in their search bar, and you should see a detailed forecast that includes the temperature, chance of rain, and more. Typically, the weather in San Francisco can be a bit unpredictable, with fog rolling in and out, especially in the summer. So, it’s always good to keep an eye on the forecast a few days ahead!

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  
It only handles English, so non-English input may behave unpredictably. It also has no memory, meaning every request is treated independently with no context from prior questions, so it can’t really carry a conversation. It doesn’t have real-time data either, so its knowledge is fixed to a cutoff and may not reflect very recent events or news.

---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  
<!-- Describe what you changed -->

**Results:**  
<!-- What improved? What didn’t? -->

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**








</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
