import { Container } from '@mui/system'
import React from 'react'
import TextField from "@mui/material/TextField";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Button from '@mui/material/Button';



function Registration() {
  return (
    <div>
      <Container>
        <div className=" bg-cyan-400 text-2xl text-center mt-5">
          <p>COVID-19 Registration Form</p>
        </div>
        <Container>
          <p className=" py-2">Name</p>
        </Container>

        <Container sx={{ display: "flex" }}>
          <TextField
            helperText="First name"
            id="demo-helper-text-aligned"
            label="Frist Name"
            sx={{ marginRighr: 1 }}
            fullWidth
          />
          <TextField
            helperText="Last name"
            id="demo-helper-text-aligned"
            label="Last Name"
            sx={{ marginLeft: 1 }}
            fullWidth
          />
        </Container>
        <Container sx={{ marginBottom: 2, marginTop: 2 }}>
          <p>Date of Birth</p>
        </Container>
        <Container sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            sx={{ width: 480 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <CalendarTodayIcon sx={{ marginLeft: 2 }} />
        </Container>
        <Container sx={{ marginBottom: 2, marginTop: 2 }}>
          <p>Address</p>
        </Container>
        <Container>
          <TextField
            helperText="Your currently address"
            id="demo-helper-text-aligned"
            label="Input your address"
            sx={{ marginRighr: 1 }}
            fullWidth
          />
        </Container>
        <div className=" bg-cyan-400 text-2xl text-center mt-8 ">
          <p>Medical History</p>
        </div>
        <div className="mt-7">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Have you been diagnosed with Covid-19?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="mt-7">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Please check all symptoms that apply:
            </FormLabel>
            <FormControlLabel
              control={<Checkbox />}
              label="Loss of taste/smell"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Difficulty breathing"
            />
            <FormControlLabel control={<Checkbox />} label="Cough" />
            <FormControlLabel control={<Checkbox />} label="Running nose" />
            <FormControlLabel control={<Checkbox />} label="Body aches" />
            <FormControlLabel control={<Checkbox />} label="Sore throat" />
            <p className=" text-sm text-gray-400">
              Please select your symptoms
            </p>
          </FormGroup>
        </div>
        <div className='flex mt-5'>
          <Button variant="outlined" color="success" >
            Submit
          </Button>
          <Button variant="outlined" color="error" sx={{marginLeft:4}}>
            cancel
          </Button>
        </div>
      </Container>
    </div>
  );
          }

export default Registration