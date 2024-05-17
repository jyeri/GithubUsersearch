import { FetchError } from '../components/FetchError/FetchErrorApp';

export default {
  title: 'FetchError',
  component: FetchError,
    argTypes: {
        error_msg: { control: 'text' },
        onclick: { action: 'clicked' },
    }
};

const Template = ({ args }:any) => <FetchError {...args} />;

export const ErrorButton = Template.bind({});
