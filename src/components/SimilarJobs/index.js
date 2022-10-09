import {AiTwotoneStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {CgToolbox} from 'react-icons/cg'

import './index.css'

const SimilarJobs = props => {
  const {similarJobData, employmentType} = props
  const {
    companyLogoUrl,
    // eslint-disable-next-line no-unused-vars
    id,
    jobDescription,
    location,
    rating,
    title,
  } = similarJobData

  return (
    <>
      <li className="similar-container" key={id}>
        <div className="logo-head-star">
          <img
            src={companyLogoUrl}
            className="similar-job-logo"
            alt="similar job company logo"
            key="company_logo_url"
          />
          <div className="title-rate">
            <h1 className="similar-job-heading" key="title">
              {title}
            </h1>
            <div className="star-rate">
              <AiTwotoneStar className="star" />
              <p className="rating" key="rating">
                {rating}
              </p>
            </div>
          </div>
        </div>
        <h1 className="similar-des-head">Description</h1>
        <p className="similar-description" key="job_description">
          {jobDescription}
        </p>
        <div className="similar-loca-type">
          <div className="location-job-icon-location-container">
            <GoLocation className="location" />
            <p className="lo-cation" key="location">
              {location}
            </p>
            <div className="location-job-icon-location-container">
              <CgToolbox className="location" />
              <p className="employ-type" key="employment_type">
                {employmentType}
              </p>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export default SimilarJobs
