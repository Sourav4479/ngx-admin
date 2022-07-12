export const TABLE_CONFIG = {
    actions: {
      delete: false
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate:true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-sunny"></i>',
      confirmDelete: false,
      mode:'external',
    },
    pager:{
      perPage:50
    },
    noDataMessage:'Loading...',
    mode :'inline',
    columns: {
      sk: {
        title: 'HSN',
        type: 'number',
        editable: false
      },
      gst: {
        title: 'GST (%)',
        type: 'number',
      },
      description: {
        title: 'Description',
        type: 'string',
      }
    },
  };