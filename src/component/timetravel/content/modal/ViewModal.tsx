import { useEffect, useState } from "react";

const ViewModal = () => {
  const [opacity, setOpacity] = useState(1); 

  useEffect(() => {
    $(document).ready(function() {
      $('#opacitySlider').on('input', function() {
          var opacity: any = $(this).val();
          $('#photo2').css('opacity', opacity);
      });
  });
  }, []);

  return (
    <>
      <div className="modal fade" id="view-modal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Drag the slider to see the difference between the old and new.</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div style={{position: 'relative'}}>
                  <img id="photo1" src="/images/timetravel/sta-ana/sta-ana-now.jpg" alt="sta-ana-now" style={{width: '100%'}} />
                  <img id="photo2" src="/images/timetravel/sta-ana/sta-ana-old.jpg" alt="sta-ana-old" style={{position: 'absolute', top: '0', left: 0, width: '100%', opacity: '1'}} />
              </div>
              <input type="range" id="opacitySlider" min="0" max="1" step="0.01" value={opacity} className="form-control-range" onChange={(event)=> {
                const newOpacity = parseFloat(event.target.value);
                setOpacity(newOpacity);
              }} />
            </div>
            <div className="modal-footer justify-content-between">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewModal;