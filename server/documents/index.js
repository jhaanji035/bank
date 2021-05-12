module.exports = (data) => {

let logo = `http://localhost:5000/images/${data.bank_name}.png`;
let businessStructureVal = data.businessStructure;

let businessStructureOtherShowHide = businessStructureVal === '6' ? 'inline-block; width: 150px;' : 'none'
   return `
<!DOCTYPE html>
<html>
<style>
body {¸
   margin: 0;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
     sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   font-size:12px;
 }
 .title{
     background-color: black;color: white;
     padding: 6px;
     margin:1em 1em 1em 0;
     float:left;
     width: 100%;
 }
 .flex-wrap-business-prop {
     display: flex;
 }
 .flex-wrap-business-prop .form-check{
     padding-left: 2.25rem;
 }

 .form-row{margin-top:15px;}
 table tr td{ padding:2px; }
 input[type="text"], textarea {
        width: 100%;
     }</style>
<body>   
    <div id="root">
    <div class="App">
        <div class="container">
            <header style="height: 70px; float:left;width: 100%">
            <div style="float: left; width :100%;">
               <img style="float:left" width="200px;margin: 3px"  src = '${logo}'/>
               <span style="float:right;font-size:20px;"><strong>Business Lending Application</strong></span>
            </div>
            </header>
            <div class="row title"><span>SECTION1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABOUT YOU AND YOUR BUSINESS</span></div>
            <div>
                <div class="about-business">Business Struture</div>
            </div>
            
                <div class="form-row">
                    <div class="flex-wrap-business-prop form-group">
                        <span style="width:auto;display:inline-block"><input type="checkbox" id='businessStructure1' class="form-check-input"><label title=""
                                class="form-check-label">Proprietary Company</label></span>
                        <span style="width:auto;display:inline-block"><input type="checkbox" id='businessStructure2' class="form-check-input"><label title=""
                                class="form-check-label">Trust</label></span>
                        <span style="width:auto;display:inline-block"><input type="checkbox" id='businessStructure3' class="form-check-input"><label title=""
                                class="form-check-label">Association</label></span>
                        <span style="width:auto;display:inline-block"><input type="checkbox" id='businessStructure4'class="form-check-input"><label title=""
                                class="form-check-label">Solo Trader / Individual</label></span>
                        <span style="width:auto;display:inline-block"><input type="checkbox" id='businessStructure5' class="form-check-input"><label title=""
                                class="form-check-label">Partnership/Joint</label></span>
                        <span style="width:auto;display:inline-block"><input type="checkbox" id='businessStructure6' class="form-check-input"><label title=""
                                class="form-check-label">Other</label></span>
                        <input type="text"value='${data.businessStructureOther}' style="display: ${businessStructureOtherShowHide}">
                    </div>
                </div>

                <table style="background-color: #dad5e8;">
                    <tr>
                      <td>
                        <table>
                          <tr>
                            <td colspan="2">Full legal name of Applicant(s) (as registered by ASIC)</td>                            
                          </tr>
                          <tr>
                            <td colspan="2"><input type="text"value='${data.full_name}'></td>
                          </tr>
                          <tr>
                            <td colspan="2">ACN/ABN</td>
                          </tr>
                          <tr>
                            <td colspan="2"><input type="text" value='${data.acn_abn}'></td>
                          </tr>
                          <tr>
                            <td colspan="2">
                                Trading
                                name
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                                <input type="text" value='${data.trading_name}'>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                                Registered address
                                (not a PO Box)
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                                <textarea row="3" placeholder="" id="form.formWord2"
            class="form-control">${data.reg_address}</textarea>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                                Principal place of
                                business (if different from registered address)
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                                <textarea row="3"
            placeholder="" id="form.formWord2" class="form-control">${data.principal_place}</textarea>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                                Mailing address (if
                                different from registered address)
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                                <textarea row="3" placeholder=""
            id="form.formWord2" class="form-control">${data.mail_address}</textarea>
                            </td>
                          </tr>
                          <tr>
                            <td>
                                Primary contact
                                person
                            </td>
                            <td>
                            Phone
                            </td>
                          </tr>
                          <tr>  
                            <td>
                                <input type="text" value='${data.primary_contact}'>
                            </td>
                            <td>
                                <input type="text" value='${data.phone}'>
                            </td>
                          </tr>

                        </table>
                      </td>
                      <td>
                        <table>
                          <tr>
                            <td>Existing Customer</td>
                            <td>Customer number/BSB & Account number/card number</td>
                          </tr>
                          <tr>
                            <td>
                                <input aria-label="radio 2" type="radio" class="form-check-input" value="yes" checked="">
                                <label title="" class="form-check-label">Yes</label>
                                <input aria-label="radio 2" type="radio" class="form-check-input" value="no">
                                <label title="" class="form-check-label">No</label>
                            </td>
                            <td>
                                <input type="text" value='${data.customer_acc_number}'>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">Briefly describe
                                your business/industry</td>
                          </tr>
                          <tr>
                            <td colspan="2">
                                <textarea rows="3" placeholder=""
                                id="form.formWord1" class="form-control">${data.describe_business}</textarea>
                            </td>
                            
                          </tr>
                          <tr>
                            <td>
                                Date commenced
                                trading(under current ownership)
                            </td>
                            <td>
                                No. of
                            employees
                            </td>
                          </tr>
                          <tr>
                            <td>
                                <input type="text"
                                id="form.formWord1" class="form-control" value='${data.date_commenced}'>
                            </td>
                            <td>
                                <input type="text" id="form.formWord1"
                            class="form-control" value='${data.no_employee}'>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                                Years of management
                                experience in this industry for direct/manager
                            </td>
                            
                          </tr>
                          <tr>
                            <td colspan="2">
                                <input
                                type="text" class="yearex form-control" value='${data.yearsOfManag}'>
                            </td>
                            
                          </tr>
                          <tr>
                            <td colspan="2">
                                Have all statutory
                                obligation of the business, including employee entitlements, been met?
                            </td>
                            
                          </tr>
                          <tr>
                            <td colspan="2">
                                <input aria-label="radio 2" type="radio"
                                    class="form-check-input" value="yes" checked=""><label title="" for="form.formWord2"
                                    class="form-check-label">Yes</label>
                                <input aria-label="radio 2" type="radio"
                                    class="form-check-input" value="no"><label title="" for="form.formWord2"
                                    class="form-check-label">No</label>
                            </td>
                            
                          </tr>
                          <tr>
                            <td colspan="2">
                                Accountant
                            Name
                            </td>
                            
                          </tr>
                          <tr>
                            <td colspan="2">
                                <input type="text" class="yearex form-control" value='${data.accountant_name}'>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                                Accountant's phone number
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                                <input type="text" class="yearex form-control" value='${data.acc_phone_number}'>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                                Who is your main
            provider of financial advice?
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                                <input type="text" class="yearex form-control" value='${data.financial_advice_provider}'>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
        </div>
    </div>
</div>

<script type='text/javascript'>
document.getElementById('businessStructure${businessStructureVal}').checked = true;
</script>
</body>
</html>
    `;
};