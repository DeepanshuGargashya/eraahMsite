import axios from "axios";

export const getAllTeachersDonors = (callback, onError) => {
  axios
    .get(
      process.env.REACT_APP_baseUrl +
        `/admin/getAllTeachers?id=${
          JSON.parse(localStorage.getItem("donor"))._id
        }`
    )
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      onError(err);
    });
};
export const getTeacherDetailsDonor = (id, callback, onError) => {
  axios
    .get(process.env.REACT_APP_baseUrl + `/Teacher/${id}`)
    .then((res) => {
      if (res.data.message) {
        onError(res.data.message);
      } else {
        callback(res.data);
      }
    })
    .catch((err) => {
      onError(err);
    });
};
export const donorSendOtp = (payload, callback, onError) => {
  axios
    .post(process.env.REACT_APP_baseUrl + "/donorGenerateLogin", payload)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      onError(err);
    });
};
export const donorVerifyOtp = (payload, callback, onError) => {
  axios
    .post(process.env.REACT_APP_baseUrl + "/donorVerifyLogin", payload)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      onError(err);
    });
};
export const getNotices = (callback, onError) => {
  axios
    .get(
      process.env.REACT_APP_baseUrl +
        `/admin/notices/${JSON.parse(localStorage.getItem("donor"))._id}`
    )
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      onError(err);
    });
};
export const getNgos = (callback, onError) => {
  axios
    .get(
      process.env.REACT_APP_baseUrl +
        `/donorNgos?id=${JSON.parse(localStorage.getItem("donor"))._id}`
    )
    .then((res) => {
      callback(res.data.error ? [] : res.data.data);
    })
    .catch((err) => {
      onError(err);
    });
};
export const getNgosTeachers = (ngoId, callback, onError) => {
  axios
    .get(
      process.env.REACT_APP_baseUrl +
        `/admin/getNgoTeachers?id=${
          JSON.parse(localStorage.getItem("donor"))._id
        }&ngoId=${ngoId}`
    )
    .then((res) => {
      callback(res.data.error ? [] : res.data.data);
    })
    .catch((err) => {
      onError(err);
    });
};
export const getNgoDetails = (ngoId, callback, onError) => {
  axios
    .get(
      process.env.REACT_APP_baseUrl +
        `/admin/getNgoDetails?id=${
          JSON.parse(localStorage.getItem("donor"))._id
        }&ngoId=${ngoId}`
    )
    .then((res) => {
      callback(res.data.error ? [] : res.data.data);
    })
    .catch((err) => {
      onError(err);
    });
};
export const getDonationHistory = (callback, onError) => {
  axios
    .get(
      process.env.REACT_APP_baseUrl +
        `/donorHistory?id=${JSON.parse(localStorage.getItem("donor"))._id}`
    )
    .then((res) => {
      callback(res.data.error ? [] : res.data.data);
    })
    .catch((err) => {
      onError(err);
    });
};
export const getGalleryImages = (payload, callback, onError) => {
  // conso;
  axios
    .post(`${process.env.REACT_APP_baseUrl}/NGO/getGallery`, payload)
    .then((result) => {
      callback(result.data);
    })
    .catch((e) => {
      console.log(e);
      onError(e);
    });
};
