function BulletPoints({ text }) {
  const lines = text
    .replace(/\r\n/g, "\n")
    .split("\n")
    .filter((line) => line);

  const list = [];
  for (let i = 0; i < lines.length; i++) {
    list.push(<li key={i}>{lines[i]}</li>);
  }
  return list;
}

export default BulletPoints;
