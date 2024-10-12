import React, { useState, useEffect } from "react";
import { classNames } from "primereact/utils";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { Tag } from "primereact/tag";
import { TriStateCheckbox } from "primereact/tristatecheckbox";

export const CustomerService = {
  getCustomers: () => {
    return Promise.resolve([
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        status: "Active",
        country: { name: "USA", code: "US" },
        representative: { name: "Amy Elsner", image: "amyelsner.png" },
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        status: "Inactive",
        country: { name: "Germany", code: "DE" },
        representative: { name: "Anna Fali", image: "annafali.png" },
      },
      {
        id: 3,
        name: "Sam Green",
        email: "sam.green@example.com",
        status: "Active",
        country: { name: "France", code: "FR" },
        representative: {
          name: "Bernardo Dominic",
          image: "bernardodominic.png",
        },
      },
      {
        id: 4,
        name: "Lisa Brown",
        email: "lisa.brown@example.com",
        status: "Pending",
        country: { name: "Spain", code: "ES" },
        representative: { name: "Ioni Bowcher", image: "ionibowcher.png" },
      },
    ]);
  },
};

export default function ServicesList() {
  const [customers, setCustomers] = useState(null);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    "country.name": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  useEffect(() => {
    const fetchCustomers = async () => {
      const data = await CustomerService.getCustomers();
      setCustomers(data);
    };
    fetchCustomers();
  }, []);

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;
    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };

  const countryBodyTemplate = (rowData) => {
    return (
      <div className="flex align-items-center gap-2">
        <img
          alt="flag"
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={`flag flag-${rowData.country.code}`}
          style={{ width: "24px" }}
        />
        <span>{rowData.country.name}</span>
      </div>
    );
  };

  const representativeBodyTemplate = (rowData) => {
    return (
      <div className="flex align-items-center gap-2">
        <img
          alt={rowData.representative.name}
          src={`https://primefaces.org/cdn/primereact/images/avatar/${rowData.representative.image}`}
          width="32"
        />
        <span>{rowData.representative.name}</span>
      </div>
    );
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <Tag value={rowData.status} severity={getSeverity(rowData.status)} />
    );
  };

  const getSeverity = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "danger";
      case "Pending":
        return "warning";
      default:
        return null;
    }
  };

  const header = renderHeader();

  return (
    <div class="container">
      <div class="page-inner">
        <div class="page-header">
          <h3 class="fw-bold mb-3">Service List</h3>
          <ul class="breadcrumbs mb-3">
            <li class="nav-home">
              <a href="#">
                <i className="fas fa-home"></i>
              </a>
            </li>
            <li class="separator">
              <i className="fas fa-arrow-right"></i>
            </li>
            <li class="nav-item">
              <a href="#">Services</a>
            </li>
          </ul>
        </div>
        <div className="card">
          <DataTable
            value={customers}
            paginator
            rows={10}
            filters={filters}
            filterDisplay="row"
            globalFilterFields={[
              "name",
              "country.name",
              "representative.name",
              "status",
            ]}
            header={header}
            emptyMessage="No customers found."
          >
            <Column
              field="name"
              header="Name"
              filter
              style={{ minWidth: "12rem" }}
            />
            <Column
              header="Country"
              filterField="country.name"
              body={countryBodyTemplate}
              filter
              filterPlaceholder="Search by country"
              style={{ minWidth: "12rem" }}
            />
            <Column
              header="Representative"
              filterField="representative.name"
              body={representativeBodyTemplate}
              filter
              style={{ minWidth: "14rem" }}
            />
            <Column
              field="status"
              header="Status"
              body={statusBodyTemplate}
              filter
              style={{ minWidth: "12rem" }}
            />
          </DataTable>
        </div>
      </div>
    </div>
  );
}
