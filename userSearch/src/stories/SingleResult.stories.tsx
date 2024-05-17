import { SingleResult } from "../components/SingleResult/SingleResultApp";
import { TargetUser } from "../tools/Interfaces";
import { Meta, StoryFn } from "@storybook/react";

export default {
    title: 'SingleResult',
    component: SingleResult,
    argTypes: {
        targetUser: { control: 'object' },
    }
} as Meta;

const Template: StoryFn<{ targetUser?: TargetUser }> = (args) => (
    <SingleResult targetUser={args.targetUser ? args.targetUser : { login: "Jyeri", id: 54321, avatar_url: "https://avatars.githubusercontent.com/u/71199404?v=4", html_url: "https://github.com/Jyeri" }} /> // Add a conditional check to ensure targetUser is defined
);

const targetUser: TargetUser = {
    login: "Jyeri",
    id: 123456,
    avatar_url: "https://avatars.githubusercontent.com/u/71199404?v=4",
    html_url: "https://github.com/Jyeri",
};

export const SingleResultStory = Template.bind({});
SingleResultStory.args = {
    targetUser: targetUser,
};