

import Link from 'next/link'
import Layout from '../../components/Layout'
import SimpleGraph from '../../components/SimpleGraph'

import Row from '../../components/Row'
import CarouselMultipleChoiceQuestion from '../../components/CarouselMultipleChoiceQuestion'
import MarkdownWithLatex from '../../components/MarkdownWithLatex'
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion'


const PositiveVsNegativePotentialEnergy = () => {
  <div>
    <MarkdownWithLatex text={`

In this section, we'll talk about potential energy. We'll revisit what it means in classical mechanics. We'll look at the potential energy that comes from gravity, springs, and electric forces. Finally, we'll learn how to calculate the potential energy of the wavefunction.

TODO: tell people who know classical mechanics to feel free to skip ahead. In particular, ask them to look at a graph and identify whether it's the potential energy associated with two repelling charges, two attractive charges, gravity, or a spring.

Potential energy is the capacity to do work that comes from the position of a system. Let's talk about gravitational potential energy. If you have a heavy thing elevated, then you can lower it and extract energy. So things have more potential energy when they're high up.

### Positive vs negative potential energy

For our current purposes, one of the most important things to remember about potential energy is the meaning of "higher" and "lower"--people often forget which way around things are. You can remember it by remembering that things that are higher off the ground have higher potential energy. Another thing to bear in mind is that in classical situations, objects accellerate towards the direction of lower potential energy--balls roll down hills.

    `}/>

    <MultipleChoiceQuestion
      question="What has higher potential energy, a brick in your hand or a brick on the ground?"
      answers={[
        "The brick in your hand has more potential energy",
        "The brick on the ground has more potential energy",
      ]}
      correctAnswerIdx={0}
      explanation="Gravitational potential energy increases as objects get farther away from the things they're attracted to."
      />

    <MultipleChoiceQuestion
      question="What has higher potential energy, a planet orbiting the sun from really close or a planet orbiting the sun from farther away?"
      answers={[
        "The close planet",
        "The far planet",
      ]}
      correctAnswerIdx={1}
      explanation="Remember that potential energy is just a function of the configuration of the objects we're looking at, and not of their momentums. The potential energy of a system is exactly the same no matter how or whether its constituents happen to be moving."
      />

    <p>Okay, so in both of these cases, we could solve it by thinking "which of these states would accellerate towards the other, considering only the positions of everything involved."</p>

    <MultipleChoiceQuestion
      question="Imagine two magnets placed on a track with their north poles facing each other, so that they're repelling each other. What has more potential energy--the state where these magnets are closer, or the state where these magnets are farther from each other?"
      answers={[
        "Repelling magnets have more potential energy when close",
        "Repelling magnets have more potential energy when far",
      ]}
      correctAnswerIdx={0}
      explanation="Remember that potential energy is just a function of the configuration of the objects we're looking at, and not of their momentums. The potential energy of a system is exactly the same no matter how or whether its constituents happen to be moving."
      />
  </div>
)

export default PositiveVsNegativePotentialEnergy;
