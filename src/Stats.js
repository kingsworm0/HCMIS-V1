import React from 'react'
import "./stats.css"
import PaidIcon from '@mui/icons-material/Paid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import QrCodeIcon from '@mui/icons-material/QrCode';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DateRangeIcon from '@mui/icons-material/DateRange';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function Stats() {
  return (
    <div className='stats'>
            <h1>Patient  Payment Records <GraphicEqIcon/></h1>
          <div className='toolbar'>
                <div className='addons'>
                 <AddIcon/>
                <span> Add Transaction Record</span>
              </div>
              <div className='edit'>
                 <EditIcon/>
               <span>  Edit Data Record</span>
              </div>
              <div className='delete'>
                <DeleteIcon/>
                <span>Delete Data Record</span>
                </div>
          </div>
              <hr></hr>
                <table>
                <tr>
                    <th className='select'><CheckCircleOutlineIcon/></th>
                    <th><PersonIcon/></th>
                    <th><DateRangeIcon /></th>
                    <th><PaidIcon/> </th>
                    <th><QrCodeIcon/></th>
                    <th><AutorenewIcon/></th>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>Elizabeth Muchoki</td>
                    <td>16.11.2022 2:25PM</td>
                    <td>Kshs 212,500/=</td>
                    <td>GH45R</td>
                    <td>Outpatient</td>
                </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>Francis  Ndirangu </td>
                    <td>17.10.2022 12:25AM</td>
                    <td>Kshs 14,200/=</td>
                    <td>DF45R</td>
                    <td>Inpatient</td>
                </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>Martin Muhia</td>
                    <td>14.11.2022 11:25PM</td>
                    <td>Kshs 2,500/=</td>
                    <td>GH45R</td>
                    <td>Outpatient</td>
                </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>Martin Muhia</td>
                    <td>14.11.2022 11:25PM</td>
                    <td>Kshs 2,500/=</td>
                    <td>GH45R</td>
                    <td>Outpatient</td>
                </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>Martin Muhia</td>
                    <td>14.11.2022 11:25PM</td>
                    <td>Kshs 2,500/=</td>
                    <td>GH45R</td>
                    <td>Outpatient</td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>Japeth Mukilio</td>
                    <td>4.11.2022 09:25PM</td>
                    <td>Kshs 4000/=</td>
                    <td>KKKFDE</td>
                    <td>Outpatient</td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>Japeth Mukilio</td>
                    <td>4.11.2022 09:25PM</td>
                    <td>Kshs 4000/=</td>
                    <td>KKKFDE</td>
                    <td>Outpatient</td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>Japeth Mukilio</td>
                    <td>4.11.2022 09:25PM</td>
                    <td>Kshs 4000/=</td>
                    <td>KKKFDE</td>
                    <td>Outpatient</td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>Japeth Mukilio</td>
                    <td>4.11.2022 09:25PM</td>
                    <td>Kshs 4000/=</td>
                    <td>KKKFDE</td>
                    <td>Outpatient</td>
                </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>Martin Muhia</td>
                    <td>14.11.2022 11:25PM</td>
                    <td>Kshs 2,500/=</td>
                    <td>GH45R</td>
                    <td>Outpatient</td>
                </tr>  <tr>
                    <td><input type="checkbox" /></td>
                    <td>Japeth Mukilio</td>
                    <td>4.11.2022 09:25PM</td>
                    <td>Kshs 4000/=</td>
                    <td>KKKFDE</td>
                    <td>Outpatient</td>
                </tr>  <tr>
                    <td><input type="checkbox" /></td>
                    <td>Martin Muhia</td>
                    <td>14.11.2022 11:25PM</td>
                    <td>Kshs 2,500/=</td>
                    <td>GH45R</td>
                    <td>Outpatient</td>
                </tr>
                 <tr>
                    <td><input type="checkbox" /></td>
                    <td>Martin Muhia</td>
                    <td>14.11.2022 11:25PM</td>
                    <td>Kshs 2,500/=</td>
                    <td>GH45R</td>
                    <td>Outpatient</td>
                </tr>  <tr>
                    <td><input type="checkbox" /></td>
                    <td>Japeth Mukilio</td>
                    <td>4.11.2022 09:25PM</td>
                    <td>Kshs 4000/=</td>
                    <td>WWDE</td>
                    <td>Outpatient</td>
                </tr> 
                
             <tr>
                    <td><input type="checkbox" /></td>
                    <td>Martin Muhia</td>
                    <td>14.11.2022 11:25PM</td>
                    <td>1,500,000/=</td>
                    <td>GH45R</td>
                    <td>In Patient</td>
                </tr>                
                <tr>
                    <td><td></td></td>
                    <td>TOTAL</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr> 
                </table>
        </div>
  )
}

export default Stats