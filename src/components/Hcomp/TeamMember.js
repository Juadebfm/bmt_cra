import PropTypes from "prop-types";

const TeamMember = ({ name, designation, company }) => {
  return (
    <>
      <div>
        <div>
          <h2 className="font-lexend font-semibold tracking-tighter text-[20px] text-primary_red">
            {name}
          </h2>
        </div>
        <div>
          <p className="font-semibold tracking-tighter text-[16px] leading-[17.3px] font-lexend text-primary_faded_dark opacity-60 whitespace-pre-line ">
            {designation}
          </p>
        </div>
        <div>
          <p className="font-semibold tracking-tighter text-[16px] leading-[17.3px] font-lexend text-primary_faded_dark opacity-60">
            {company}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  designation: PropTypes.string, // designation is now optional
  company: PropTypes.string, // company is now optional
};

export default TeamMember;
