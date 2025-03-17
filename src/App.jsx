import AllPosts from "./Component/AllPosts.jsx";
import Heading from "./Component/Heading.jsx";
import Post from "./Component/Post.jsx";
import Section from "./Component/Section.jsx";

export default function ProfilePage() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post title="Hello traveller!" body="Read about my adventures." />
      <AllPosts />
    </Section>
  );
}
