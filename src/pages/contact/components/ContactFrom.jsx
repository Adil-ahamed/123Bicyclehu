import React, { useState } from "react";

import { Button, Container, Grid, TextField } from "@mui/material";

function ContactFrom() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <Container maxWidth="sm">
      <Grid container spacing={2} component="form" onSubmit={handleSubmit} sx={{py:4}}>
        <Grid size={{ xs: 12 }}>
          <TextField
            placeholder="Name"
            required
            fullWidth
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            variant="outlined"
            sx={{
              bgcolor: "#fff",
              borderRadius: 2,

              // label color when focused
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#cddc39",
              },

              // border color when focused
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#cddc39", // default border color
                },
                "&:hover fieldset": {
                  borderColor: "#cddc39", // hover border color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#cddc39", // focused border color
                },
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            placeholder="Email"
            required
            fullWidth
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            variant="outlined"
            sx={{
              bgcolor: "#fff",
              borderRadius: 2,

              // label color when focused
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#cddc39",
              },

              // border color when focused
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#cddc39", // default border color
                },
                "&:hover fieldset": {
                  borderColor: "#cddc39", // hover border color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#cddc39", // focused border color
                },
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            multiline
            rows={6}
            placeholder="Message"
            required
            fullWidth
            type="text"
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            variant="outlined"
            sx={{
              bgcolor: "#fff",
              borderRadius: 2,

              // label color when focused
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#cddc39",
              },

              // border color when focused
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#cddc39", // default border color
                },
                "&:hover fieldset": {
                  borderColor: "#cddc39", // hover border color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#cddc39", // focused border color
                },
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button
            type="submit"
            className="nav-btn"
            fullWidth
            sx={{
              textTransform: "capitalize",
              py: 2,
              borderRadius: 2,
              color: "black",
            }}
          >
            Submit Now
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactFrom;
