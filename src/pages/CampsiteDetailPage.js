import { Container } from 'reactstrap';
import { userParms } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampesiteDetail from '../features/campsites/CampsiteDetail';
import CampsiteDetail from '../features/campsites/CampsiteDetail';

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const campsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <Row>
                <CampsiteDetail campsite={campsite} />
            </Row>
        </Container>
    );

};

export default CampsiteDetailPage;