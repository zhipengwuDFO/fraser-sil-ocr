import React from "react";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";

import { Box, Typography } from "@mui/material";
type Props = {
  className?: string;
};

const TablePart = (props: Props) => {
  const { className } = props;
  const data = [
    {
      id: 1,
      Date: ["Sept 19/2019", 0.842],
      Stream: ["Quesnel Lake-North Arm", 0.788],
      "Survey Start Time": ["1022", 0.962],
      "Survey End Time": ["1107", 0.962],
      "Survey type Ground": [":selected:", 0.831],
      "Survey type Aerial": [":unselected:", 0.951],
      "%Bankfull <25": [":unselected:", 0.959],
      "%Bankfull 25-50": [":unselected:", 0.953],
      "Weather %Cloudy 50%": [":unselected:", 0.966],
      "Weather %Cloudy 75%": [":unselected:", 0.966],
      "Weather %Cloudy 100%": [":selected:", 0.974],
      "Precipitation Type Rain": [":selected:", 0.974],
      "Precipitation Type Snow": [":unselected:", 0.966],
      "Precipitation Type None": [":unselected:", 0.969],
      "Precipitation Intensity Light": [":selected:", 0.964],
      "Precipitation Intensity Medium": [":unselected:", 0.959],
      "Precipitation Intensity Heavy": [":unselected:", 0.959],
      "Water Conditions Fish Visibility Low": [":unselected:", 0.963],
      "Water Conditions Fish Visibility Medium": [":selected:", 0.964],
      "Water Conditions Fish Visibility High": [":unselected:", 0.954],
    },
    {
      id: 2,
      Date: ["Sept 19/2019", 0.842],
      Stream: ["Quesnel Lake-North Arm", 0.788],
      "Survey Start Time": ["1022", 0.962],
      "Survey End Time": ["1107", 0.962],
      "Survey type Ground": [":selected:", 0.831],
      "Survey type Aerial": [":unselected:", 0.951],
      "%Bankfull <25": [":unselected:", 0.959],
      "%Bankfull 25-50": [":unselected:", 0.953],
      "Weather %Cloudy 50%": [":unselected:", 0.966],
      "Weather %Cloudy 75%": [":unselected:", 0.966],
      "Weather %Cloudy 100%": [":selected:", 0.974],
      "Precipitation Type Rain": [":selected:", 0.974],
      "Precipitation Type Snow": [":unselected:", 0.966],
      "Precipitation Type None": [":unselected:", 0.969],
      "Precipitation Intensity Light": [":selected:", 0.964],
      "Precipitation Intensity Medium": [":unselected:", 0.959],
      "Precipitation Intensity Heavy": [":unselected:", 0.959],
      "Water Conditions Fish Visibility Low": [":unselected:", 0.963],
      "Water Conditions Fish Visibility Medium": [":selected:", 0.964],
      "Water Conditions Fish Visibility High": [":unselected:", 0.954],
    },
    {
      id: 3,
      Date: ["Sept 19/2019", 0.842],
      Stream: ["Quesnel Lake-North Arm", 0.788],
      "Survey Start Time": ["1022", 0.962],
      "Survey End Time": ["1107", 0.962],
      "Survey type Ground": [":selected:", 0.831],
      "Survey type Aerial": [":unselected:", 0.951],
      "%Bankfull <25": [":unselected:", 0.959],
      "%Bankfull 25-50": [":unselected:", 0.953],
      "Weather %Cloudy 50%": [":unselected:", 0.966],
      "Weather %Cloudy 75%": [":unselected:", 0.966],
      "Weather %Cloudy 100%": [":selected:", 0.974],
      "Precipitation Type Rain": [":selected:", 0.974],
      "Precipitation Type Snow": [":unselected:", 0.966],
      "Precipitation Type None": [":unselected:", 0.969],
      "Precipitation Intensity Light": [":selected:", 0.964],
      "Precipitation Intensity Medium": [":unselected:", 0.959],
      "Precipitation Intensity Heavy": [":unselected:", 0.959],
      "Water Conditions Fish Visibility Low": [":unselected:", 0.963],
      "Water Conditions Fish Visibility Medium": [":selected:", 0.964],
      "Water Conditions Fish Visibility High": [":unselected:", 0.954],
    },
  ];
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "Date",
      headerName: "Date",
      width: 130,
      valueGetter: (params: any) => params[0],
    },
    {
      field: "Stream",
      headerName: "Stream",
      width: 130,
      valueGetter: (params: any) => params[0],
    },
    {
      field: "Survey Start Time",
      headerName: "Survey Start Time",
      width: 130,
      valueGetter: (params: any) => params[0],
    },
    {
      field: "Survey End Time",
      headerName: "Survey End Time",
      width: 130,
      valueGetter: (params: any) => params[0],
    },
    {
      field: "Survey type Ground",
      headerName: "Survey type Ground",
      width: 130,
      valueGetter: (params: any) => params[0],
    },
    {
      field: "Survey type Aerial",
      headerName: "Survey type Aerial",
      width: 130,
      valueGetter: (params: any) => params[0],
    },
    {
      field: "%Bankfull <25",
      headerName: "%Bankfull <25",
      width: 130,
      valueGetter: (params: any) => params[0],
    },
    {
      field: "%Bankfull 25-50",
      headerName: "%Bankfull 25-50",
      width: 130,
      valueGetter: (params: any) => params[0],
    },
    {
      field: "Precipitation Type Rain",
      headerName: "Precipitation Type Rain",
      width: 130,
      valueGetter: (params: any) => params[0],
    },
 
  ];

  function NoDataOverlay() {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography variant="h6" color="textSecondary">
          No data available
        </Typography>
      </Box>
    );
  }
  function CustomToolbar() {
   
    let timeStamp = new Date().toLocaleDateString("en-CA").split("-").join("");



    //only need date
    // timeStamp = timeStamp.split(",")[0];
    // //convert to yyymmdd
    // timeStamp = timeStamp.split("/").join("");
    // console.log(timeStamp);
    return (
      <GridToolbarContainer sx={{ display: "flex", alignItems: "center" }}>
        <GridToolbarColumnsButton />
        <GridToolbarDensitySelector />

        {/* Center the species selector using flex
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1, // Makes this take up the available space
          }}
        >
          <div className="text-sm text-[#2B76D2]">SPECIES</div>
          <Select
            name="species"
            id="species"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            sx={{
              width: "120px",
              height: "30px",
              color: "#2B76D2",
              borderRadius: "4px",
            }}
          >
            <MenuItem sx={{ color: "#2B76D2" }} value="all">
              ALL
            </MenuItem>
            {speciesList.map((el) => (
              <MenuItem
                sx={{ color: "#2B76D2" }}
                key={el.value}
                value={el.value}
              >
                {el.label}
              </MenuItem>
            ))}
          </Select>
        </Box> */}

        <GridToolbarExport printOptions={{ disableToolbarButton: true }}
        
        csvOptions={{

          fileName: `Fraser_SILs_${timeStamp}`, // Customize your CSV file name
        }}
        />
      </GridToolbarContainer>
    );
  }

  return (
    <div className={`${className} `}>
      <DataGrid
        // loading={data.length === 0 && isLoadSearch}
        slotProps={{
          loadingOverlay: {
            variant: "skeleton",
            noRowsVariant: "skeleton",
          },
        }}
        columns={columns}
        rows={data}
        sx={{ height: "100%", width: "100%" }}
        slots={{
          toolbar: CustomToolbar,
          noRowsOverlay: NoDataOverlay, // Set the NoRowsOverlay
        }}
      />
    </div>
  );
};
export default TablePart;
