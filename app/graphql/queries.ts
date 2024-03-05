import { gql } from '@apollo/client';

// This query will only return the code, the name and the flag of the countries
export const GET_ALL_TRAFFIC_ANNOUCNEMENTS = gql`
  query GetAllTrafficAnnouncements {
    trafficAnnouncements {
      id
      announcementId
      title {
        fi
        sv
        en
      }
      description {
        fi
        sv
        en
      }
      severity
      status
      startTime
      endTime
      geojson
      modesOfTransport
      class {
        class
        subclass
      }
      trafficDirectionFreeText {
        fi
        sv
        en
      }
      temporarySpeedLimit
      duration
      additionalInfo
      detour
      oversizeLoad
      vehicleSizeLimit
      url
      imageUrls
    }
  }
`;
