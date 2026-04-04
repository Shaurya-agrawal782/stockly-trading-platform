import React from 'react';
function Brokerage() {
  return (
    <div className="container border-top">
      <div className="row p-5" >
        <h2>Other Applicable Charges</h2>
        <div className="col p-5">
          <p>Government & Exchange Charges</p>
          <p className="text-muted" style={{ fontSize: "12px" }}>
            Statutory taxes levied by exchanges and regulators. Applicable on buy or sell depending on trade type, and collected as per prevailing government rules.
          </p>
          <p>Depository & Account Charges</p>
          <p className="text-muted" style={{ fontSize: "12px" }}>
            Demat-related charges may apply when securities are sold. Annual account maintenance may also be applicable depending on account type.
          </p>
          <p>Service-Based Charges</p>
          <p className="text-muted" style={{ fontSize: "12px" }}>
            Optional assisted orders, corporate action requests, pledge requests, and off-market transfers may incur additional service fees.
          </p>
        </div>
        <div className="col p-5">
          <p>Taxes</p>
          <p className="text-muted" style={{ fontSize: "12px" }}>
            GST is charged on brokerage and applicable service fees as per government norms. Other statutory taxes and exchange fees may also apply.
          </p>
          <p>Charges vary by trade type</p>
          <p className="text-muted" style={{ fontSize: "12px" }}>
            Fees depend on whether the trade is equity delivery, intraday, or derivatives, and are applied in accordance with regulatory requirements.
          </p>
          <p className='mt-4 text-muted' style={{ fontSize: "12px" }}>
            All charges are indicative and subject to regulatory changes. Statutory taxes and exchange fees are levied as applicable. Please refer to official documentation for the most current details.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;