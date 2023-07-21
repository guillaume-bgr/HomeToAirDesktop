function ProfileEditForm(props) {

    return (
        <form method="POST" className="py-2">
            <input type="text" name="name" defaultValue="Jenna" className="form-input-solid shadow-none mb-3" placeholder="Prénom" />
            <input type="text" name="name" defaultValue="Doe" className="form-input-solid shadow-none mb-3" placeholder="Nom" />
            <button type="submit" className="btn btn-primary">Ajouter</button>
        </form>
    )
}

export default ProfileEditForm;