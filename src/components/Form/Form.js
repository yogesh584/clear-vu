import React, { useRef, useEffect, useState } from "react";
import IonRangeSlider from "react-ion-slider";

let currDate = new Date();
currDate = currDate.toISOString().split("T")[0];

export const Input = ({
  colClass,
  label,
  type,
  tooltip,
  name,
  min,
  errors,
  register,
  registerFields,
  inputData,
  otherRegisterFields,
  registerFieldsFeedback,
  children,
  isArray,
  index,
  handleMedia = () => { },
  accept,
  isMedia,
  onChangeFunc = ()=> {}
}) => {
  let [k, v] = name.split(".");
  let isKey = v ? (errors[k] ? errors[k][v] : errors[name]) : errors[name];

  // console.log('isArray', isArray, name)
  // console.log('kv', k, v, index)

  // console.log(errors['new_education']?.[0])

  if (isArray) {
    k = k.split("[")[0];
    isKey = v ? (errors[k] ? errors[k][index][v] : errors[name]) : errors[name];
  }

  // new_experience[0].job_title

  // console.log(name, errors, isKey)

  return (
    <div className={`${colClass ? colClass : "col-xl-4"}`}>
      <div className="form-group">
        <label>
          {label}{" "}
          {registerFields.required ? (
            <span className="text-danger">*</span>
          ) : (
            ""
          )}
          {tooltip?.show ? (
            <i className="fa fa-question-circle fa-1x" title={tooltip?.title} />
          ) : (
            ""
          )}
        </label>

        <input
          type={type}
          className={`form-control form-control-solid form-control-lg ${
            isKey && "is-invalid"
          }`}
          name={name}
          min={min}
          placeholder={label}
          {...register(name, registerFields)}
          {...inputData}
          accept={accept}
          onChange={(e) => {
            onChangeFunc(e);
            if(isMedia){
              handleMedia(e)
            }
          }}
        />
        {registerFields?.required && isKey?.type === "required" && (
          <div className="invalid-feedback">
            The {label.toLowerCase()} field is required.
          </div>
        )}
        {registerFields?.minLength && isKey?.type === "minLength" && (
          <div className="invalid-feedback">
            The {label.toLowerCase()} field is invalid.
          </div>
        )}
        {registerFields?.maxLength && isKey?.type === "maxLength" && (
          <div className="invalid-feedback">
            The {label.toLowerCase()} field is invalid.
          </div>
        )}
        {registerFields?.min >= 0 && isKey?.type === "min" && (
          <div className="invalid-feedback">
            The {label.toLowerCase()} field is invalid.
          </div>
        )}
        {registerFields?.pattern && isKey?.type === "pattern" && (
          <div className="invalid-feedback">
            {registerFieldsFeedback?.pattern}
          </div>
        )}        
        {otherRegisterFields?.manual && isKey?.type === "manual" && (
          <div className="invalid-feedback">{otherRegisterFields.feedback}</div>
        )}
        {/* {errors?.[name] &&
          errors[name].type ===
            "manual_company_logo"(
              <div className="invalid-feedback">
                Image size cannot be more then 3 MB
              </div>
            )} */}
        {name == "company_logo" && (
          <div
          // className="invalid-feedback"
          >
            Image size cannot be more then 3 MB
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export const RangeInput = ({
  colClass,
  label,
  type,
  tooltip,
  name,
  min,
  errors,
  register,
  registerFields,
  inputData,
  otherRegisterFields,
  registerFieldsFeedback,
  children,
  isArray,
  index,
  setValue,
  getValues,
  sliderData,
}) => {
  let [k, v] = name.split(".");
  let isKey = v ? (errors[k] ? errors[k][v] : errors[name]) : errors[name];

  // console.log('isArray', isArray, name)
  // console.log('kv', k, v, index)

  // console.log(errors['new_education']?.[0])

  if (isArray) {
    k = k.split("[")[0];
    isKey = v ? (errors[k] ? errors[k][index][v] : errors[name]) : errors[name];
  }

  // new_experience[0].job_title

  // console.log(name, errors, isKey)

  return (
    <div className={`${colClass ? colClass : "col-xl-4"}`}>
      <div className="form-group">
        <label>
          {label}{" "}
          {registerFields.required ? (
            <span className="text-danger">*</span>
          ) : (
            ""
          )}
          {tooltip?.show ? (
            <i className="fa fa-question-circle fa-1x" title={tooltip?.title} />
          ) : (
            ""
          )}
        </label>

        {/* <input
          type={type}
          className={`form-control form-control-solid form-control-lg ${
            isKey && "is-invalid"
          }`}
          name={name}
          min={min}
          placeholder={label}
          {...register(name, registerFields)}
          {...inputData}
        /> */}

        <IonRangeSlider
          className="form-control form-control-solid form-control-lg"
          {...sliderData}
          // onChange={(data)=>{
          //   setValue(`${name}`, data);

          // }}
          onFinish={(data) => {
            console.log(data.from, data.to);
            setValue(`${name}.from`, data.from);
            setValue(`${name}.to`, data.to);
          }}
          // type="double"
          // min="0"
          // max="300"
          // from="0"
          // to="350"
          // skin="flat"
          // prefix="$"
          // postfix="k"
          // max_postfix="+"
          // //step=""
          // //values=""
          // keyboard="true"
        />

        {registerFields?.required && isKey?.type === "required" && (
          <div className="invalid-feedback">
            The {label.toLowerCase()} field is required.
          </div>
        )}
        {registerFields?.minLength && isKey?.type === "minLength" && (
          <div className="invalid-feedback">
            The {label.toLowerCase()} field is invalid.
          </div>
        )}
        {registerFields?.maxLength && isKey?.type === "maxLength" && (
          <div className="invalid-feedback">
            The {label.toLowerCase()} field is invalid.
          </div>
        )}
        {registerFields?.min >= 0 && isKey?.type === "min" && (
          <div className="invalid-feedback">
            The {label.toLowerCase()} field is invalid.
          </div>
        )}
        {registerFields?.pattern && isKey?.type === "pattern" && (
          <div className="invalid-feedback">
            {registerFieldsFeedback?.pattern}
          </div>
        )}
        {otherRegisterFields?.manual && isKey?.type === "manual" && (
          <div className="invalid-feedback">{otherRegisterFields.feedback}</div>
        )}
        {/* {errors?.[name] &&
          errors[name].type ===
            "manual_company_logo"(
              <div className="invalid-feedback">
                Image size cannot be more then 3 MB
              </div>
            )} */}
        {name == "company_logo" && (
          <div
          // className="invalid-feedback"
          >
            Image size cannot be more then 3 MB
          </div>
        )}
      </div>
      {children}
    </div>
  );
};


export const SelectInput = ({
  colClass,
  label,
  name,
  errors,
  register,
  registerFields,
  children,
  onChange,
  moreData,
  isArray,
  index,
  removeButton
}) => {
  let [k, v] = name.split(".");
  let isKey = v ? (errors[k] ? errors[k][v] : errors[name]) : errors[name];

  // console.log('isArray', isArray, name)
  // console.log('kv', k, v, index)

  // console.log(errors['new_education']?.[0])

  if (isArray) {
    k = k.split("[")[0];
    isKey = v ? (errors[k] ? errors[k][index][v] : errors[name]) : errors[name];
  }

  return (
    <div className={`${colClass ? colClass : "col-xl-4"}`}>
      <div className="form-group">
        <label>
          {label}{" "}
          {registerFields.required ? (
            <span className="text-danger">*</span>
          ) : (
            ""
          )}
        </label>
        <div className="d-flex" style={{gap: "8px"}}>
          <select
            name={name}
            className={`form-control form-control-solid form-control-lg ${
              errors[name] && "is-invalid"
            }`}
            {...register(name, registerFields)}
            onChange={(e) => onChange && onChange(e.target.value)}
          >
            {children}
          </select>
          {removeButton}
        </div>

        {registerFields.required && errors[name]?.type === "required" && (
          <div className="invalid-feedback">
            The {label.toLowerCase()} field is required.
          </div>
        )}
      </div>
      {moreData}
    </div>
  );
};

export const Textarea = ({
  colClass,
  label,
  name,
  errors,
  register,
  registerFields,
  inputData,
}) => {
  let [k, v] = name.split(".");
  let isKey = v ? (errors[k] ? errors[k][v] : errors[name]) : errors[name];

  const refRegister = register(name, registerFields);

  return (
    <div className={`${colClass ? colClass : "col-xl-12"}`}>
      <div className="form-group">
        <label>
          {label}{" "}
          {registerFields.required ? (
            <span className="text-danger">*</span>
          ) : (
            ""
          )}
        </label>
        <textarea
          className={`form-control form-control-solid form-control-lg ${
            isKey && "is-invalid"
          }`}
          name={name}
          cols="30"
          rows="5"
          placeholder={`Enter ${label}`}
          // ref={inputData?.ref ?? null}
          // {...register(name, registerFields)}
          {...refRegister}
          ref={(e) => {
            refRegister.ref(e);
            // dobMonthInput.current = e;
            if (inputData?.ref) {
              inputData.ref.current = e;
            }
          }}
          {...inputData}
        ></textarea>
        {registerFields?.required && isKey?.type === "required" && (
          <div className="invalid-feedback">
            The {label.toLowerCase()} field is required.
          </div>
        )}
      </div>
    </div>
  );
};

export const Textarea2 = ({
  colClass,
  label,
  name,
  errors,
  register,
  registerFields,
  inputData,
  onChange,
  otherRegisterFields,
}) => {
  let [k, v] = name.split(".");
  let isKey = v ? (errors[k] ? errors[k][v] : errors[name]) : errors[name];

  const refRegister = register(name, registerFields);

  return (
    <div className={`${colClass ? colClass : "col-xl-12"}`}>
      <div className="form-group">
        <label>
          {label}{" "}
          {registerFields.required ? (
            <span className="text-danger">*</span>
          ) : (
            ""
          )}
        </label>
        <textarea
          className={`form-control form-control-solid form-control-lg ${
            isKey && "is-invalid"
          }`}
          name={name}
          cols="30"
          rows="5"
          placeholder={`Enter ${label}`}
          // ref={inputData?.ref ?? null}
          // {...register(name, registerFields)}
          {...refRegister}
          ref={(e) => {
            refRegister.ref(e);
            // dobMonthInput.current = e;
            if (inputData?.ref) {
              inputData.ref.current = e;
            }
          }}
          onChange={(e) => onChange && onChange(e.target.value)}
          // {...inputData}
        ></textarea>
        {registerFields?.required && isKey?.type === "required" && (
          <div className="invalid-feedback">
            The {label.toLowerCase()} field is required.
          </div>
        )}
        {otherRegisterFields?.manual && errors[name]?.type === "manual" && (
          <div className="invalid-feedback">{otherRegisterFields.feedback}</div>
        )}
      </div>
    </div>
  );
};

export const SearchInput = ({
  label,
  name,
  register,
  required,
  errors,
  isDate,
  clearErrors,
  otherRegisterFields,
  extras = {},
  isSelectInput,
  children,
  onChange,
}) => {
  const dateRef = useRef();

  const openDatePicker = () => {
    // dateRef.current.children;
  };

  return (
    <div className="col-lg-3 mb-lg-0 mb-6 mt-2">
      <label>{label}</label>

      {!isDate ? (
        !isSelectInput ? (
          <input
            type="text"
            placeholder={label}
            className={`form-control ${errors[name] && "is-invalid"}`}
            {...register(name, { required })}
            {...extras}
          />
        ) : (
          <select
            name={name}
            {...register(name, { required })}
            className={`form-control ${errors[name] && "is-invalid"}`}
            onChange={(e) => onChange && onChange(e.target.value)}
            {...extras}
          >
            {children}
          </select>
        )
      ) : (
        <div ref={dateRef} onClick={openDatePicker}>
          <input
            type="date"
            placeholder={label}
            max={currDate}
            className={`form-control ${errors[name] && "is-invalid"}`}
            {...register(name, { required })}
            onChange={() => clearErrors && clearErrors(errors[name])}
            {...extras}
          />
        </div>
      )}

      {required && errors[name]?.type === "required" && (
        <div className="invalid-feedback">
          The {label.toLowerCase()} field is required.
        </div>
      )}
      {otherRegisterFields?.manual && errors[name]?.type === "manual" && (
        <div className="invalid-feedback">{otherRegisterFields.feedback}</div>
      )}
    </div>
  );
};

export const RenderInputFields = ({ InputFields, errors, register }) => {
  return (
    <>
      {InputFields.map((inputMain, index) => {
        return (
          <div key={index} className="row">
            {inputMain.map((InputSub, index) => {
              return (
                <InputSub.Component
                  key={index}
                  {...InputSub}
                  errors={errors}
                  register={register}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export const SubmitButton = ({ handleSubmit, onSubmit, name, pxClass }) => {
  return (
    <>
      <button
        onClick={handleSubmit(onSubmit)}
        style={{ display: "none" }}
      ></button>
      <div
        className={`d-flex justify-content-between border-top my-5 pt-10 ${pxClass}`}
      >
        {/* px-10 */}
        <div className="mr-2">
          <button
            onClick={handleSubmit(onSubmit)}
            type="button"
            className="btn btn-success font-weight-bold text-uppercase px-9 formUpdate"
          >
            {name}
          </button>
        </div>
      </div>
    </>
  );
};

export const SearchSubmitButton = ({
  handleSubmit,
  onSearchHandler,
  onResetHandler,
}) => {
  return (
    <>
      <button
        onClick={handleSubmit(onSearchHandler)}
        style={{ display: "none" }}
      ></button>
      <div className="row mt-8">
        <div className="col-lg-12">
          <button
            className="btn btn-primary btn-primary--icon"
            id="kt_search"
            onClick={handleSubmit(onSearchHandler)}
          >
            <span>
              <span>Search</span>
              <i className="la la-search ml-1 pr-0"></i>
            </span>
          </button>
          &nbsp;&nbsp;
          <button
            className="btn btn-secondary btn-secondary--icon"
            id="kt_reset"
            data-toggle="collapse"
            data-target="#collapseOne6"
            onClick={onResetHandler}
          >
            <span>
              <i className="la la-close"></i>
              <span>Clear Search</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export const OtherInput = ({
  label,
  type,
  name,
  errors,
  register,
  registerFields,
  otherRegisterFields,
  patternError,
}) => {
  return (
    <div className="form-group">
      <input
        className={`form-control ${
          errors[name] && "is-invalid"
        } form-control-solid h-auto py-7 px-6 border-0 rounded-lg font-size-h6`}
        type={type}
        name={name}
        autoComplete="off"
        placeholder={`Enter ${label}`}
        {...register(name, registerFields)}
      />
      {registerFields?.required && errors[name]?.type === "required" && (
        <div className="invalid-feedback">
          The {label.toLowerCase()} field is required.
        </div>
      )}
      {registerFields?.pattern && errors[name]?.type === "pattern" && (
        <div className="invalid-feedback">{patternError}</div>
      )}
      {otherRegisterFields?.manual && errors[name]?.type === "manual" && (
        <div className="invalid-feedback">{otherRegisterFields.feedback}</div>
      )}
    </div>
  );
};
