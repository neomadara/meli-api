const InstrumentUseCase = async <T>(useCase: () => Promise<T>, useCaseName: string): Promise<T> => {
  const start = Date.now();
  console.log(`Starting use case: ${useCaseName}`);

  try {
    const result = await useCase();
    const duration = Date.now() - start;
    console.log(`Completed use case: ${useCaseName} in ${duration}ms`);
    return result;
  } catch (error) {
    const duration = Date.now() - start;
    console.log(`Failed use case: ${useCaseName} in ${duration}ms`);
    throw error;
  }
};

export default InstrumentUseCase;
