import { Container } from '@mui/system'
import React from 'react'
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
function Vaccination() {
    const [dose, setDose] = React.useState("");

    const handleChange = (event) => {
      setDose(event.target.value);
    };
    const [vaccine, setVaccine] = React.useState("");
    const handleChange2 = (event) => {
      setVaccine(event.target.value);
    };
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
        <Container sx={{ marginTop: 2 }}>
          <div className="flex">
            <Box sx={{ minWidth: 120 }}>
              <p className="mb-2">Vaccine Dose No.</p>
              <FormControl sx={{ width: 484, marginRight: 1 }}>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={dose}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>First Dose</MenuItem>
                  <MenuItem value={20}>Secound Dose</MenuItem>
                  <MenuItem value={30}>Third Dose</MenuItem>
                  <MenuItem value={40}>Fourth Dose</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <p className="mb-2">Vaccine Type</p>
              <FormControl sx={{ width: 484 }} h>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={vaccine}
                  onChange={handleChange2}
                >
                  <MenuItem value={10}>Pfizer BioNtech</MenuItem>
                  <MenuItem value={20}>CoronaVac</MenuItem>
                  <MenuItem value={30}>Johnson & Johnson</MenuItem>
                  <MenuItem value={40}>Oxford, AstraZeneca</MenuItem>
                  <MenuItem value={50}>Sinopharm BBIBP</MenuItem>
                  <MenuItem value={60}>Sputnik Light</MenuItem>
                  <MenuItem value={70}>Sputnik V</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </Container>

        <Container sx={{ marginTop: 2 }}>
          <div className="flex">
            <Box>
              <p className="mb-2">Vaccinate At</p>
              <TextField
                id="demo-helper-text-aligned"
                label="Input location of your vaccinate"
                sx={{ marginRight: 1, width: 484 }}
              />
            </Box>

            <Box>
              <p className=" mb-2">Vaccinate Date</p>
              <TextField
                id="date"
                type="date"
                sx={{ width: 484 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
          </div>
        </Container>
        <Container>
          
          <div className="flex mt-5 ">
            <div className='flex-1'/>
            <Button variant="outlined" color="success">
              Submit
            </Button>
            <Button variant="outlined" color="error" sx={{ marginLeft: 4 }}>
              cancel
            </Button>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default Vaccination