
import PitchForm from "@/components/pitches/PitchForm";

const SubmitPitch = () => {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Submit Your Pitch</h1>
        <p className="text-muted-foreground">
          Share your startup with investors, mentors, and the startup community
        </p>
      </div>

      <PitchForm />
    </div>
  );
};

export default SubmitPitch;
