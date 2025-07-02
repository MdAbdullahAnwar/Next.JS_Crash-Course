export default async function SecondDynamic({ params }) {
  // console.log(params);
  const { seconddynamic } = params;

  return (
    <h1>{`This is the ${seconddynamic} Route`}</h1>
  );
}
