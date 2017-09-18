import Link from 'next/link'
import Layout from '../components/Layout'
import SimpleGraph from '../components/SimpleGraph'
import MarkdownWithLatex from '../components/MarkdownWithLatex'


const MiriQuestions = () => (
  <Layout>
    <h2>MIRI software engineer questions</h2>
      <MarkdownWithLatex text={`

Here are my thoughts on all these areas.

I don't think that you can cover all these areas by asking questions. I doubt it's possible to learn much about people's debugging skills from talking to them, for example.

And in some other cases, my recommended question is more like "how much time have you spent working on this kind of thing". I recommend separating out the part of the call where you're quizzing them from the part where you're just asking them questions about their past.

I think that the material here would probably take maybe five minutes per section. I've written more proposed questions than I need for most sections.

### Experience with types of programming language

I think these should stay as a questionnaire, asked with questions like this:

> How much experience do you have with low level languages like C?
>
> - None
> - I've written little bits but never done a week's solid work in this kind of language
> - More than a week, less than a year.
> - 1-5 years
> - More than five years

You can also ask specific questions about low level programming and functional programming:

- Low level:
    - general note: C is the lowest-common-denominator low level language; you can probably just ask about it.
    - Suppose you have a function that looks like \`int foo(int bar, int *baz);\`. What does this mean?
    - How do you write a function in C that returns two values? (desired answer: accept a pointer to an int)
    - What kind of stuff do you write in a header file in C?
    - What’s a register?
    - What is memory mapped IO?
    - What’s the difference between the stack and the heap?
    - General note: There's a big difference between low-level application programmers who happen to work in C, and programmers who work on embedded systems, and programmers who write firmware. These types of programmers have surprisingly non-overlapping knowledge in my experience.
- Functional:
    - What’s an algebraic data type?
    - What is the Option type (in Scala) or the Maybe type (in Haskell)?
    - What is a lens?
    - What is a monad?
    - (I don’t know enough FP to come up with questions that would distinguish someone like me from someone much better)

### Language development

- What’s a parser?
    - takes a program string into an AST
    - How would you write a C parser?
      - things they might say: recursive descent, lex/yacc/etc, parser combinators
    - Have you written an interpreter before? maybe
- How does a simple compiler work? Walk me through all the stages.
  - What are the various intermediate forms usually like?
- What’s single static assignment form?
- What’s register allocation?

### DSL development

Idk what to ask about; I don't know your goals here

### Working with a codebase

A lot of these questions are hard to ask about; I'm not sure you want to.

- debugging--I don't know how to ask about this
- profiling (Maybe: What tools have you used for profiling? What’s a thirty second story of a time you profiled something?)
- testing:
    - (no right answer) Are you into unit testing and integration testing?
      - What’s the difference between a unit test and an integration test?
      - Have you heard of randomized testing, like QuickCheck?
          - What’s shrinking, in the context of randomized testing?
- version control: Idk if you can ask meaningfully about this. I also don't know if it matters, except maybe as correlating with other things that are easier to ask about.
- code review: Idk if you can ask meaningfully about this

### Algorithms development

You can ask directly about their knowledge of algorithms. Eg
- What’s a breadth first search?
- Given the following definitions of BFS, which is correct?
- To find the shortest path through a maze, what algorithm is optimal?
- Why does BFS return shortest paths through a graph?
- What’s Dijkstra’s algorithm?
    - Does it work on graphs which contain nodes of zero weight?

But that's not entirely getting at what you want. Perhaps:

- Have you ever had to use dynamic programming in a practical situation?
- Have you ever had to modify a data structure in a practical situation?


### Planning algorithms

I don't know enough about this to write questions

### designing/architecting a system

hard to ask about in short answers, and I'm not sure what you're trying to get at. Are you talking about object oriented design or scalable web system design or relational database schema design?

### problem discovery

- IDK what you mean by "problem discovery"

### ML/NNs

- What's the difference between supervised and unsupervised learning?
- What’s the bias/variance tradeoff?
- How does logistic regression work?
- What’s the expression for log loss?
- What’s the entropy of a biased coin?
- What is the mathematical expression of the problem which linear PCA solves?
- What’s softmax?
- Write down the function that takes the parameters of a single hidden layer MLP and the input and computes its output

### Cloud computing

- Have you ever configured a load balancer?
- What is a health check?
- What’s AWS Lambda?
- What is service discovery?

### Distributed computing

- What is leader selection an algorithm for?
- What is a network partition?
- Suppose you wanted to set up a job queue: many app servers need to send jobs to a centralized queue, and many workers need to be running, getting these jobs and running them. These jobs might involve database queries. What’s a good architecture?
    - desired answer: The app servers write to Redis or something, and the workers are subscribed to Redis queues, and the workers query the DB as needed.
        - Your clients, who are software companies, want to be notified when their jobs are completed. What’s a good way of architecting that?
            - webhooks

### Bayesian inference

- What problem does MCMC solve?
  - we want to approximate a posterior, but computing the integral is really hard, so it’s convenient to be able to just sample from the posterior.
- How does MCMC work?
- What’s variational inference?
  - What direction is the KL divergence in variational inference?
- If I asked you to solve a Bayesian inference problem right now, what software would you use?

### Big O

- What’s an example of something that would take quadratic time?
- What’s the formal definition of big O?
- What does amortized time mean?
- What’s the time complexity of inserting into a (chained) hash table?


### Concurrecy, threading

- What’s the difference between a thread and a process?
- What’s a semaphore?
- Where’s the race condition in the following code? (take a problem from the Little Book Of Semaphores)
- What’s the software transactional memory approach to concurrency?

### Probability theory
- What’s a probability density function?
- What’s the functional form of a Gaussian?
- What’s the definition of the variance of a random variable?
- What does it mean if the covariance matrix of a multivariate Gaussian is a diagonal matrix?
- What’s maximum likelihood estimation?
- What’s maximum a posteriori?

### logic
- What’s the difference between propositional logic and first-order logic?
- What’s the relationship between satisfiability and consistency of a formula?
- What’s a model?
- “Santa Claus has all the properties of a sadist”. Can you say that sentence in first-order logic? How about second-order logic?
- Is there such a thing as third-order logic? Does it have more power than second-order?


    `}/>


  </Layout>
  )

export default MiriQuestions
