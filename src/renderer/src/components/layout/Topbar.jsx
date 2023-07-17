
function TopBar(props) {
    // Pour la toolbar : 
    // - Si le bouton appliqué redirige vers une autre vue, lui donner le props path
    // - Si le bouton appliqué execute une autre action, lui donner le props onPress (ex: trigger une modal)

	return (
        <>
            <div id="appTopbar" className="pt-2">
                <div className="content mt-2 py-2 d-flex align-items-center justify-content-between">
                    <div className="page-heading">
                        <h1 className="page-title mb-0">{ props.pageTitle }</h1>
                        <ul className="breadcrumb mb-0">
                            { props.breadcrumbs ? props.breadcrumbs.map((breadcrumb, key) => {
                                return (
                                    <li className="breadcrumb-item" key={key}>
                                        {breadcrumb.path ?
                                        <a className="text-decoration-none" href={breadcrumb.path}>{breadcrumb.title}</a>
                                        :
                                        breadcrumb.title}
                                    </li>
                                )
                            }) : null}
                        </ul>
                    </div>
                    <div className="toolbar">
                        {props.buttons ? props.buttons.map((button, key) => {
                            if (button.path) {
                                return <a key={key} className={button.className ? 'ms-2 btn '+button.className : 'ms-2 btn btn-primary'} href={button.path}>{button.title}</a>
                            } else if (button.onPress) {
                                return <button key={key} className={button.className ? 'ms-2 btn '+button.className : 'ms-2 btn btn-primary'} onPress={button.onPress}>{button.title}</button>
                            }
                        }) : null}
                    </div>
                </div>
            </div>
        </>
	);
}

export default TopBar;