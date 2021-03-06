import React from 'react'
import Layout from "../components/Layout";
import Page from "../components/Template/Page";
import {graphql} from "gatsby";
import extractSEO from "../utils/get-seo";

export default ({data: {positibe_api: {page}}}) => {
  return <Layout seo={extractSEO(page)}><Page page={page}/></Layout>
}

export const query = graphql`
  query ($id: ID!) {
    positibe_api {
      page(id: $id) {
        id
        title
        description
        excerpt
        image
        sections {
          edges {
            node {
              id
              name
              configuration
              components {
                edges {
                  node {
                    id
                    type
                    heading
                    content
                    attributes
                    link
                    image
                    imageFilters
                    video
                    media {
                      id
                      originalName
                      publicUrl
                      publicUrlSharp {
                        base
                        childImageSharp {
                          fluid (maxWidth: 1900) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                    gallery {
                      id
                      medias {
                        edges {
                          node {
                            id
                            originalName
                            publicUrl
                            publicUrlSharp {
                              extension
                              relativePath
                              absolutePath
                              childImageSharp {
                                fluid (maxWidth: 1900) {
                                  ...GatsbyImageSharpFluid
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    children {
                      edges {
                        node {
                          id
                          type
                          heading
                          attributes
                          link
                          image
                          imageFilters
                          video
                          media {
                            id
                            originalName
                            publicUrl
                            publicUrlSharp {
                              extension
                              relativePath
                              absolutePath
                              childImageSharp {
                                fluid (maxWidth: 1900) {
                                  ...GatsbyImageSharpFluid
                                }
                              }
                            }
                          }
                          gallery {
                            id
                            medias {
                              edges {
                                node {
                                  id
                                  originalName
                                  publicUrl
                                  publicUrlSharp {
                                    extension
                                    relativePath
                                    absolutePath
                                    childImageSharp {
                                      fluid (maxWidth: 1900) {
                                        ...GatsbyImageSharpFluid
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`