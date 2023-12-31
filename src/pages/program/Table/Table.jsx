// BTS
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Components
import Paper from '@mui/material/Paper';
import TableMui from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Header from './Header';
import { StyledTableCell, StyledTableRow } from './StyledTable';
// Data
import rows from './tableData';
// Styling
const sectionStyling = {
    background: 'linear-gradient(180deg, rgba(94, 72, 105, 1) 0%, rgba(216, 198, 144, 1) 100%)',
};


const Table = () => {
    return (
        <section id="table" style={sectionStyling}>
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col md={9} lg={8} xl={7} xxl={7}>
                        <Header />
                        <TableContainer component={Paper}>
                            <TableMui sx={{ width: "100%" }} aria-label="Tabla de precios por separado">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Servicio</StyledTableCell>
                                        <StyledTableCell align="right">Valores si adquieres cada servicio por separado</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.price}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </TableMui>
                        </TableContainer>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Table;