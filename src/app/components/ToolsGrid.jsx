export default function ToolsGrid({ clients }) {
    return (
      <div className="p-4 bg-black">
        <div className="clients-grid bg-red">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`client-card bg-black text-white ${getBorderClass(index, clients.length)}`}
            >
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="clients__logo mb-3"
                    style={{height:"100px" , width:"100px"}}
                  />
                  <p>{client.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  function getBorderClass(index, totalItems) {
    const columns = 3;
    const rows = Math.ceil(totalItems / columns); // Calculate number of rows needed
    const row = Math.floor(index / columns); // Get the current row of the card
    const column = index % columns; // Get the column of the card
    
    let borderClass = '';
  
    // Right border for all columns except the last one in the row
    if (column < columns - 1) {
      borderClass += 'border-right-grid ';
    }
  
    // Bottom border for all rows except the last row
    if (row < rows - 1) {
      borderClass += 'border-bottom';
    }
  
    return borderClass.trim();
  }
  