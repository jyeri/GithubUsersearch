import { TitleBar } from '../components/TitleBar/TitleBar';

export default {
  title: 'Title',
  component: TitleBar,
};

const Template = ({ args }:any) => <TitleBar {...args} />;
export const Title = Template.bind({});

