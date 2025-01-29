import H from './components/H'
import Emoji from './components/Emoji'
import EmojiHeading from './components/EmojiHeading'
import { useImmer } from 'use-immer'
import { Button, Box, Typography } from '@mui/material'
import StackBadge from './components/StackBadge'

// Allowed element types and their properties:
// 1. 'h' (Header)
//    - id: string (unique identifier)
//    - type: 'h' (element type)
//    - value: string (text content of the header)
//    - variant: number (header variant, e.g., 1 for H1, 2 for H2, etc.)

// 2. 'emoji' (Standalone Emoji)
//    - id: string (unique identifier)
//    - type: 'emoji' (element type)
//    - value: string (emoji name or identifier)
//    - data (optional): object
//        - size: string (CSS size value, e.g., '2em', '24px')

// 3. 'para' (Paragraph)
//    - id: string (unique identifier)
//    - type: 'para' (element type)
//    - value: string (text content of the paragraph)

// 4. 'hr' (Horizontal Rule)
//    - id: string (unique identifier)
//    - type: 'hr' (element type)
//    - No additional properties

// 5. 'eh' (Emoji with Header/Text)
//    - id: string (unique identifier)
//    - type: 'eh' (element type)
//    - value: object
//        - emoji: string (emoji name or identifier)
//        - text: string (text content accompanying the emoji)
//        - variant: number (header variant, e.g., 1 for H1, 2 for H2, etc.)
//        - size: string (CSS size value, e.g., '2rem', '20px')
//        - margin: string (CSS margin value, e.g., '5px', '10px 5px')



const SAMPLE_DATA = [
    {
        type: 'eh',
        value: {
            emoji: "meow_heart",
            text: "Hey! Nice to see you.",
            variant: 1,
            size: '2rem',
            margin: '5px'
        }
    },
    {
        type: 'hr'
    },
    {
        type: 'para',
        value: "Welcome to my page!"
    },
    {
        type: 'para',
        value: "I'm Thomas, Fullstack developer from  Lorient, France, currently living in  Stockholm, Sweden."
    },
    {
        type: 'h',
        value: "Things I code with",
        variant: 2
    },
    {
        type: 'tstack',
        value: [
            "https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white",
            "https://img.shields.io/badge/-Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=white",
            "https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&logo=docker&logoColor=white",
            "https://img.shields.io/badge/-Google_Cloud_Platform-1a73e8?style=flat-square&logo=google-cloud&logoColor=white",
            "https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white",
            "https://img.shields.io/badge/-Insomnia-5849BE?style=flat-square&logo=insomnia&logoColor=white",
            "https://img.shields.io/badge/-Apollo%20GraphQL-311C87?style=flat-square&logo=apollo-graphql&logoColor=white",
            "https://img.shields.io/badge/-RxJs-B7178C?style=flat-square&logo=reactivex&logoColor=white",
            "https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white",
            "https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white",
            "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
            "https://img.shields.io/badge/-Angular-DD0031?style=flat-square&logo=angular&logoColor=white",
            "https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white",
            "https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white",
            "https://img.shields.io/badge/-Brave_Browser-FB542B?style=flat-square&logo=brave&logoColor=white",
            "https://img.shields.io/badge/-Rollup-EC4A3F?style=flat-square&logo=rollup.js&logoColor=white",
            "https://img.shields.io/badge/-D3.js-F9A03C?style=flat-square&logo=d3.js&logoColor=white",
            "https://img.shields.io/badge/-Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white",
            "https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white",
            "https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white"
        ]
    }
]

// add id to sample data automatically
SAMPLE_DATA.forEach((element, idx) => {
    element.id = idx.toString()
})


export default function Template() {
    const [data, setData] = useImmer(SAMPLE_DATA)

    const renderElement = (element, setValue) => {
        if (element.type == 'h') {
            return <H key={element.id} setValue={setValue} text={element.value} variant={element.variant} />
        } else if (element.type == 'hr') {
            return <hr key={element.id} />
        } else if (element.type == 'emoji') {
            return <Emoji key={element.id} setValue={setValue} value={element.value} size={element.data.size} margin={element.data.margin} />
        } else if (element.type == 'para') {
            return <p key={element.id} style={{
                margin: 0
            }}>{element.value}</p>
        } else if (element.type == 'eh') {
            return <EmojiHeading key={element.id} value={element.value} setValue={setValue} />
        } else if (element.type == 'tstack') {
            return <StackBadge key={element.id} value={element.value} setValue={setValue} />
        }

        return null
    }


    return (
        <>
            <Box mb={5}>
                <Button variant='contained' onClick={() => {
                    console.log(data)
                }}>Export</Button>
            </Box>
            {data.map((element, idx) => {
                const setValue = (value) => {
                    setData(draft => {
                        draft[idx].value = value
                    })
                }
                return renderElement(element, setValue)
            })}
        </>
    );
}