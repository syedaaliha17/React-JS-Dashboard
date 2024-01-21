import { ResponsiveChoropleth } from "@nivo/geo";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { mockGeographyData as data } from "../data/mockData";
import { geoFeatures } from "../data/mockGeoFeature";

const GeographyChart = ({ isDashboard }) => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  return (
    <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: color.gray[100],
            },
          },
          legend: {
            text: {
              fill: color.gray[100],
            },
          },
          text: {
            fill: color.gray[100],
          },
        },
        legends: {
          text: {
            fill: color.gray[100],
          },
        },
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.49] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#ffff"
      legends={
        !isDashboard?
        [{
          anchor: "bottom-left",
          direction: "column",
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemTextColor: color.gray[100],
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#fffff",
                itemOpacity: 1,
              },
            },
          ],
        },]: undefined}
    />
  );
};
export default GeographyChart;
