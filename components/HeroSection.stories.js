import HeroSection from './HeroSection';

const storyConfig = {
  title: 'Sections/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Hero section with 3D animation background, fully customizable for white-labeling.',
      },
    },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    aFrameColor: { control: 'color' },
  },
};

const Template = (args) => {
  // Apply dynamic styles for white-labeling demo
  const style = document.createElement('style');
  style.textContent = `
    .hero-section {
      background-color: ${args.backgroundColor} !important;
      color: ${args.textColor} !important;
    }
  `;
  document.head.appendChild(style);
  
  return <HeroSection {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  backgroundColor: '#000000',
  textColor: '#ffffff',
  aFrameColor: '#4CC3D9',
};

export const LightTheme = Template.bind({});
LightTheme.args = {
  backgroundColor: '#ffffff',
  textColor: '#000000',
  aFrameColor: '#2196F3',
};

export const CustomBranded = Template.bind({});
CustomBranded.args = {
  backgroundColor: '#1a237e',
  textColor: '#ffffff',
  aFrameColor: '#ff4081',
};

export default storyConfig;