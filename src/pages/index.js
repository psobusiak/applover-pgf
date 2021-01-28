// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/layout'
import {
  Subtitle,
  Title,
  DescriptionView,
  Description,
  DescriptionText,
  DescriptionTitleGroup,
} from '../components/styles'
import '../css/main.min.css'

type Props = {
  data: Object,
}

export default class Index extends React.Component<Props> {
  render() {
    return (
      <Layout data={this.props.data}>
        <DescriptionView>
          <DescriptionTitleGroup>
            <Subtitle>Welcome To</Subtitle>
            <Title>Personal Growth Framework 🎓</Title>
          </DescriptionTitleGroup>
          <Description>
            <DescriptionText>
              This is where we keep the Personal Growth Framework (PGF) for
              Applover team members.
            </DescriptionText>
            <DescriptionText>
              PGF is a tool that guides you through your professional
              development and lets you understand how to progress in your work.
              It helps you find your own way at Applover so that you can grow
              both as a professional and a person. PGF is not a checklist - it is
              your <b>guide</b> in your career development.
            </DescriptionText>
            <DescriptionText>
              Apart from describing you professional development paths, PGF
              emphasizes the values that we cherish and follow at Applover. We
              want all the team members to have easy and constant access to
              these values.
            </DescriptionText>
            <Subtitle>How does it work?</Subtitle>
            <DescriptionText>
              Take a look at the sidebar/menu - you will find there 9 paths
              of values that we embrace at Applover and possible paths in your
              career development. Each path contains exemplary behaviors
              within each milestone for it. While most of these paths are
              common and relevant to all Applover&apos;s team members, there are
              few that are optional to be followed (paths like <b>Mentorship</b>{' '}
              or <b>Leadership</b>).
            </DescriptionText>
            <DescriptionText>
              Milestone represents a single goal to be achieved within given
              period of time and illustrates how exemplary behaviors/skills for
              particular path of values/career development path changes over
              time along with your progression.
            </DescriptionText>
            <DescriptionText>
              Below you will find a group of <b>Core</b> paths which are
              directly related to professions we employ at Applover. With PGF
              we want to support both horizontal and vertical development so
              that you can focus either on becoming a rockstar in your domain or
              growing into a T-shaped person with a range of various skills.
            </DescriptionText>
            <hr/>
            <DescriptionText>
              PGF is a living organism meaning it will evolve over time. Feel
              free to contribute by submitting a merge request in the{' '}
              <a href="https://git.applover.pl/Applover/pgf">
                <FontAwesomeIcon icon={faGitlab} />{' '}repository
              </a>
              .
            </DescriptionText>
            <DescriptionText>
              This site has been built on top of {' '}
              <a href="https://github.com/monzo/progression-framework">
                <FontAwesomeIcon icon={faGithub} /> Monzo&apos;s{' '}
              </a>
              progression framework.
            </DescriptionText>
          </Description>
        </DescriptionView>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            sidebarTitle
            sidebarGroup
          }
        }
      }
    }
  }
`
