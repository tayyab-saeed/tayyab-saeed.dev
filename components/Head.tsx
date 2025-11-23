import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Muhammad Tayyab Saeed is a software engineer with 2+ years of experience building production mobile apps using React Native, Expo, and TypeScript"
      />
      <meta
        name="keywords"
        content="muhammad tayyab saeed, tayyab saeed, tayyab, software engineer, react native developer, mobile developer, expo developer, typescript, vscode-portfolio"
      />
      <meta property="og:title" content="Muhammad Tayyab Saeed's Portfolio" />
      <meta
        property="og:description"
        content="A software engineer building production mobile apps with React Native and TypeScript."
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Muhammad Tayyab Saeed',
};
