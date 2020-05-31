module.exports = ({ template, script, style }) => {
  const templateBlock = `<template>${template}</template>`;
  const scriptBlock = `<script>${script}</script>`;
  const styleBlock = `<style>${style}</style>`;

  return `
${template ? templateBlock : ''}

${script ? scriptBlock : ''}

${style ? styleBlock : ''}
`;
};
