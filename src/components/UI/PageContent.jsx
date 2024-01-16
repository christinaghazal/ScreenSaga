import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const PageContent = ({ title, children }) => {
  return (
    <Box component="section" py={4}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" mb={4} textAlign="center">
          {title}
        </Typography>
        {children}
      </Container>
    </Box>
  );
};

export default PageContent;
