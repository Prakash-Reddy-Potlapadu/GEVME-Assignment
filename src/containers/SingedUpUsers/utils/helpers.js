export const getColumns = (handleViewprofile, handleViewPost) => {
    return [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: 150,
            align: "left",
            sortable: true,
        },
        {
            title: "User Name",
            dataIndex: "username",
            key: "username",
            width: 150,
            align: "left",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            width: 350,
            align: "left",
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
            width: 200,
            align: "left",
        },
        {
            title: "Website",
            dataIndex: "website",
            key: "website",
            width: 200,
            align: "left",
        },
        {
            title: "",
            dataIndex: "",
            key: "viewprofile",
            render: (value, index, row) => (
                <a href="#" onClick={() => handleViewprofile(value)}>
                    View Profile
                </a>
            ),
            align: "left",
            width: 100,
        },
        {
            title: "",
            dataIndex: "",
            key: "viewpost",
            render: (value, index, row) => (
                <a href="#" onClick={() => handleViewPost(value.id)}>
                    View Post
                </a>
            ),
            align: "left",
            width: 100,
        },
    ];
};

export const getAddress = (addressObj) => {
    if (Object.keys(addressObj).length && Object.keys(addressObj.address).length) {
        return `${addressObj.address.street}, ${addressObj.address.suite}, ${addressObj.address.city}, ${addressObj.address.zipcode}`;
    } else {
        return "";
    }
};
