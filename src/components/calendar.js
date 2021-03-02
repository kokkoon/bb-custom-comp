(() => ({
    name: "calendar",
    type: "BODY_COMPONENT",
    allowedTypes: [],
    orientation: "HORIZONTAL",
    jsx: (() => {
        const FullCalendar = window.FullCalendar;
        const interactionPlugin = window.interactionPlugin;
        const dayGridPlugin = window.dayGridPlugin;
        const timeGridPlugin = window.timeGridPlugin;
        const listPlugin = window.listPlugin;
        return (
            <div style={{ padding: "30px", backgroundColor: "#fff" }}>
                <FullCalendar
                    plugins={[interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin]}
                    initialView="dayGridMonth"
                    displayEventTime={true}
                    height="80vh"
                    headerToolbar={{
                        left: "today prev,next",
                        center: "title",
                        right: ""
                    }}
                    navLinks={true}
                    nowIndicator={true}
                    selectable={true}
                    editable={true}
                    droppable={true}>
                </FullCalendar>
            </div>
        )
    })(),
    styles: () => () => ({
        empty: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '4rem',
          height: '100%',
          width: '100%',
          fontSize: '0.75rem',
          color: '#262A3A',
          textTransform: 'uppercase',
          boxSizing: 'border-box',
        },
        pristine: {
          borderWidth: '0.0625rem',
          borderColor: '#AFB5C8',
          borderStyle: 'dashed',
          backgroundColor: '#F0F1F5',
          '&::after': {
            content: '"Breadcrumbs"',
          },
        },
      }),
}))();