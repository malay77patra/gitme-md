import { useState } from "react";
import { IconButton, Box, Menu, MenuItem, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const badgeOptions = [
    { name: "React", url: "https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" },
    { name: "Webpack", url: "https://img.shields.io/badge/-Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=white" },
    { name: "Docker", url: "https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&logo=docker&logoColor=white" },
    { name: "GitHub Actions", url: "https://img.shields.io/badge/-Github_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white" },
    { name: "Google Cloud Platform", url: "https://img.shields.io/badge/-Google_Cloud_Platform-1a73e8?style=flat-square&logo=google-cloud&logoColor=white" },
    { name: "TypeScript", url: "https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" },
    { name: "Insomnia", url: "https://img.shields.io/badge/-Insomnia-5849BE?style=flat-square&logo=insomnia&logoColor=white" },
    { name: "Apollo GraphQL", url: "https://img.shields.io/badge/-Apollo%20GraphQL-311C87?style=flat-square&logo=apollo-graphql&logoColor=white" },
    { name: "Heroku", url: "https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku&logoColor=white" },
    { name: "Redux", url: "https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white" },
    { name: "RxJS", url: "https://img.shields.io/badge/-RxJs-B7178C?style=flat-square&logo=reactivex&logoColor=white" },
    { name: "GraphQL", url: "https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white" },
    { name: "Sass", url: "https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white" },
    { name: "Styled Components", url: "https://img.shields.io/badge/-Styled_Components-db7092?style=flat-square&logo=styled-components&logoColor=white" },
    { name: "Git", url: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" },
    { name: "NestJS", url: "https://img.shields.io/badge/-NestJs-ea2845?style=flat-square&logo=nestjs&logoColor=white" },
    { name: "Angular", url: "https://img.shields.io/badge/-Angular-DD0031?style=flat-square&logo=angular&logoColor=white" },
    { name: "NPM", url: "https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" },
    { name: "HTML5", url: "https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" },
    { name: "Brave Browser", url: "https://img.shields.io/badge/-Brave_Browser-FB542B?style=flat-square&logo=brave&logoColor=white" },
    { name: "Rollup", url: "https://img.shields.io/badge/-Rollup-EC4A3F?style=flat-square&logo=rollup.js&logoColor=white" },
    { name: "D3.js", url: "https://img.shields.io/badge/-D3.js-F9A03C?style=flat-square&logo=d3.js&logoColor=white" },
    { name: "Prettier", url: "https://img.shields.io/badge/-Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white" },
    { name: "MongoDB", url: "https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white" },
    { name: "Node.js", url: "https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white" },
];

const StackBadge = ({ value = [], setValue }) => {
    const [addMenuAnchor, setAddMenuAnchor] = useState(null);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 4
        }}>
            {value.map((badge, index) => (
                <Tooltip key={index} title="Click to remove">
                    <img src={badge} onClick={() => {
                        setValue(value.filter((b) => b !== badge));
                    }} alt="badge" style={{ cursor: "pointer" }} />
                </Tooltip>
            ))}
            <IconButton onClick={(e) => setAddMenuAnchor(e.currentTarget)} style={{
                padding: 2
            }}>
            <AddIcon />
            </IconButton>
            <Menu anchorEl={addMenuAnchor} open={Boolean(addMenuAnchor)} onClose={() => setAddMenuAnchor(null)}>
                {badgeOptions.map((badge, index) => (
                    <MenuItem key={index} onClick={() => {
                        setValue([...new Set([...value, badge.url])]);
                        setAddMenuAnchor(null)
                    }}>
                        <img src={badge.url} alt={badge.name} style={{ height: 20, marginRight: 8 }} />
                        {badge.name}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default StackBadge;
