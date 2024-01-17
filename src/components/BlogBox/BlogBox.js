import {
  BlogBoxContainer,
  BlogBoxDate,
  BlogBoxSummary,
  BlogBoxTitle,
} from "./BlogBoxStyles";

const BlogBox = (props) => {
  console.log("props", props);
  return (
    <BlogBoxContainer>
      <BlogBoxTitle>{props.title}</BlogBoxTitle>
      <BlogBoxSummary>{props.summary}</BlogBoxSummary>
      <BlogBoxDate>{props.date}</BlogBoxDate>
      {props.children}
    </BlogBoxContainer>
  );
};

export default BlogBox;
