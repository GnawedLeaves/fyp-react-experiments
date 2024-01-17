import styled from "styled-components";
import {
  BlogsBoxesContainer,
  BlogsHomeContainer,
  BlogsPageTitle,
} from "./BlogsPageStyles";
import BlogBox from "../../components/BlogBox/BlogBox";

const BlogsPage = () => {
  const blogsContentArray = [
    {
      title: "Rainy Day",
      date: "17 Jan 2023",
      summary: "it was a rainy day today",
      coverImg: "",
    },
    {
      title: "Sunny Day",
      date: "16 Jan 2023",
      summary: "it was a sunny ass day today",
      coverImg: "",
    },
    {
      title: "Sunny Day 2",
      date: "16 Jan 2023",
      summary: "it was a sunny ass day today",
      coverImg: "",
    },
    {
      title: "Sunny Day 2",
      date: "16 Jan 2023",
      summary: "it was a sunny ass day today",
      coverImg: "",
    },
  ];

  const input = {
    title: "Rainy Day",
    date: "17 Jan 2023",
    summary: "it was a rainy day today",
    coverImg: "",
  };

  return (
    <BlogsHomeContainer>
      <BlogsPageTitle>Blogs</BlogsPageTitle>
      <BlogsBoxesContainer>
        {blogsContentArray.map((blogContent, index) => {
          return (
            <BlogBox
              key={index}
              index={index}
              title={blogContent.title}
              summary={blogContent.summary}
              date={blogContent.date}
            />
          );
        })}
      </BlogsBoxesContainer>
    </BlogsHomeContainer>
  );
};

export default BlogsPage;
