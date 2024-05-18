import  { FetchError }  from '../components/FetchError/FetchErrorApp';
import 'FetchError.scss';
import { Meta } from '@storybook/react';

export default {
  title: 'FetchError',
  component: FetchError,
    argTypes: {
        error_msg: { control: 'text' },
        onclick: { action: 'clicked' },
    }
} as Meta;

const Template = ({ args }:any) => <FetchError {...args} />;

export const ErrorButton = Template.bind({});

