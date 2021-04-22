var searchData=
[
  ['ort_5fapi2_5fstatus_25',['ORT_API2_STATUS',['../struct_ort_api.html#af470fc5b18b4d612e04f75bbe3b10ce9',1,'OrtApi::ORT_API2_STATUS(CreateEnv, OrtLoggingLevel logging_level, _In_ const char *logid, _Outptr_ OrtEnv **out)'],['../struct_ort_api.html#a15f771e8988af178425c10947d9cbf10',1,'OrtApi::ORT_API2_STATUS(CreateEnvWithCustomLogger, OrtLoggingFunction logging_function, _In_opt_ void *logger_param, OrtLoggingLevel logging_level, _In_ const char *logid, _Outptr_ OrtEnv **out)'],['../struct_ort_api.html#ad50e1eb98d033c4839cb458435de3ecf',1,'OrtApi::ORT_API2_STATUS(CreateSessionOptions, _Outptr_ OrtSessionOptions **options)'],['../struct_ort_api.html#a255ef9389f7b0d4cbcb7bf5aba5b162a',1,'OrtApi::ORT_API2_STATUS(SessionGetInputCount, _In_ const OrtSession *sess, _Out_ size_t *out)'],['../struct_ort_api.html#a527a6dcf2835e678c2d00dea32668f21',1,'OrtApi::ORT_API2_STATUS(SessionGetInputTypeInfo, _In_ const OrtSession *sess, size_t index, _Outptr_ OrtTypeInfo **type_info)'],['../struct_ort_api.html#a9aa8341acda82f9e2bcb0e88361f951e',1,'OrtApi::ORT_API2_STATUS(SessionGetOutputTypeInfo, _In_ const OrtSession *sess, size_t index, _Outptr_ OrtTypeInfo **type_info)'],['../struct_ort_api.html#aa1a4ef6b75b2feeac7819135b18acf13',1,'OrtApi::ORT_API2_STATUS(SessionGetOverridableInitializerTypeInfo, _In_ const OrtSession *sess, size_t index, _Outptr_ OrtTypeInfo **type_info)'],['../struct_ort_api.html#a1d1e145cfd4e9718fa46b0887b86b721',1,'OrtApi::ORT_API2_STATUS(SessionGetInputName, _In_ const OrtSession *sess, size_t index, _Inout_ OrtAllocator *allocator, _Outptr_ char **value)'],['../struct_ort_api.html#a880189002ac2f5051f0da6ee34608228',1,'OrtApi::ORT_API2_STATUS(CreateRunOptions, _Outptr_ OrtRunOptions **out)'],['../struct_ort_api.html#a0cbf8ee38575baf84245d8339d0bde42',1,'OrtApi::ORT_API2_STATUS(CreateTensorAsOrtValue, _Inout_ OrtAllocator *allocator, _In_ const int64_t *shape, size_t shape_len, ONNXTensorElementDataType type, _Outptr_ OrtValue **out)'],['../struct_ort_api.html#a0aeeb4718d6f3434591c87581446d138',1,'OrtApi::ORT_API2_STATUS(CreateTensorWithDataAsOrtValue, _In_ const OrtMemoryInfo *info, _Inout_ void *p_data, size_t p_data_len, _In_ const int64_t *shape, size_t shape_len, ONNXTensorElementDataType type, _Outptr_ OrtValue **out)'],['../struct_ort_api.html#a56fdb2ddb21507b8ce35685a0e7d5855',1,'OrtApi::ORT_API2_STATUS(IsTensor, _In_ const OrtValue *value, _Out_ int *out)'],['../struct_ort_api.html#a9ccdeac1b1fb06352da34865254ce5ac',1,'OrtApi::ORT_API2_STATUS(FillStringTensor, _Inout_ OrtValue *value, _In_ const char *const *s, size_t s_len)'],['../struct_ort_api.html#a7112d4449a313e7e4b3a24ebd734d71a',1,'OrtApi::ORT_API2_STATUS(GetStringTensorDataLength, _In_ const OrtValue *value, _Out_ size_t *len)'],['../struct_ort_api.html#a2551661754f3e8da51549d0ed5fe5b0e',1,'OrtApi::ORT_API2_STATUS(GetStringTensorContent, _In_ const OrtValue *value, _Out_writes_bytes_all_(s_len) void *s, size_t s_len, _Out_writes_all_(offsets_len) size_t *offsets, size_t offsets_len)'],['../struct_ort_api.html#a8ecc6bce170bb2c538f1f16595d79479',1,'OrtApi::ORT_API2_STATUS(CastTypeInfoToTensorInfo, _In_ const OrtTypeInfo *, _Outptr_result_maybenull_ const OrtTensorTypeAndShapeInfo **out)'],['../struct_ort_api.html#a36d33f23c9313d2bc07bd86e4620b73f',1,'OrtApi::ORT_API2_STATUS(GetOnnxTypeFromTypeInfo, _In_ const OrtTypeInfo *, _Out_ enum ONNXType *out)'],['../struct_ort_api.html#ad9da0612916a265317a3ddc6963d608e',1,'OrtApi::ORT_API2_STATUS(CreateTensorTypeAndShapeInfo, _Outptr_ OrtTensorTypeAndShapeInfo **out)'],['../struct_ort_api.html#a169e0445183527de69a73d33ce9e5324',1,'OrtApi::ORT_API2_STATUS(SetDimensions, OrtTensorTypeAndShapeInfo *info, _In_ const int64_t *dim_values, size_t dim_count)'],['../struct_ort_api.html#a5a978f00f68d1168fc1f7acdb7fa49e3',1,'OrtApi::ORT_API2_STATUS(GetTensorShapeElementCount, _In_ const OrtTensorTypeAndShapeInfo *info, _Out_ size_t *out)'],['../struct_ort_api.html#a492527061a5116109b3f4fdf98ce7380',1,'OrtApi::ORT_API2_STATUS(GetTensorTypeAndShape, _In_ const OrtValue *value, _Outptr_ OrtTensorTypeAndShapeInfo **out)'],['../struct_ort_api.html#a2f9131671d6994960a6790c385f3790b',1,'OrtApi::ORT_API2_STATUS(GetTypeInfo, _In_ const OrtValue *value, _Outptr_result_maybenull_ OrtTypeInfo **out)'],['../struct_ort_api.html#a4ac5f17b227b80abe852b90e54095eee',1,'OrtApi::ORT_API2_STATUS(CreateCpuMemoryInfo, enum OrtAllocatorType type, enum OrtMemType mem_type1, _Outptr_ OrtMemoryInfo **out)'],['../struct_ort_api.html#ae738d4e41f86db2bf9cf5112e85708ec',1,'OrtApi::ORT_API2_STATUS(CompareMemoryInfo, _In_ const OrtMemoryInfo *info1, _In_ const OrtMemoryInfo *info2, _Out_ int *out)'],['../struct_ort_api.html#aa3c22230494d7552aee66c53f44905d5',1,'OrtApi::ORT_API2_STATUS(MemoryInfoGetName, _In_ const OrtMemoryInfo *ptr, _Out_ const char **out)'],['../struct_ort_api.html#af83cca7946b19338c59ecb7100b0bcdd',1,'OrtApi::ORT_API2_STATUS(GetValue, _In_ const OrtValue *value, int index, _Inout_ OrtAllocator *allocator, _Outptr_ OrtValue **out)'],['../struct_ort_api.html#a62d7d82c3256629c815d11bbc6978155',1,'OrtApi::ORT_API2_STATUS(GetValueCount, _In_ const OrtValue *value, _Out_ size_t *out)'],['../struct_ort_api.html#a61c27d4fcd2e0bde44dae48d99664057',1,'OrtApi::ORT_API2_STATUS(CreateValue, _In_reads_(num_values) const OrtValue *const *in, size_t num_values, enum ONNXType value_type, _Outptr_ OrtValue **out)'],['../struct_ort_api.html#acf0bb3336d18fed0b7372b3d8bc003ce',1,'OrtApi::ORT_API2_STATUS(CreateOpaqueValue, _In_z_ const char *domain_name, _In_z_ const char *type_name, _In_ const void *data_container, size_t data_container_size, _Outptr_ OrtValue **out)'],['../struct_ort_api.html#a31c9e2f1c640413f0c2ccca7c7e85c3c',1,'OrtApi::ORT_API2_STATUS(GetOpaqueValue, _In_ const char *domain_name, _In_ const char *type_name, _In_ const OrtValue *in, _Out_ void *data_container, size_t data_container_size)'],['../struct_ort_api.html#ad1aa1c315426d9c0802a44e2d2cdd195',1,'OrtApi::ORT_API2_STATUS(GetDenotationFromTypeInfo, _In_ const OrtTypeInfo *, _Out_ const char **const denotation, _Out_ size_t *len)'],['../struct_ort_api.html#a2f1ac715222219c2b3fc28d78d58ae44',1,'OrtApi::ORT_API2_STATUS(CastTypeInfoToMapTypeInfo, _In_ const OrtTypeInfo *type_info, _Outptr_result_maybenull_ const OrtMapTypeInfo **out)'],['../struct_ort_api.html#a8728befcfaf81906d10744c6d730b3fb',1,'OrtApi::ORT_API2_STATUS(CastTypeInfoToSequenceTypeInfo, _In_ const OrtTypeInfo *type_info, _Outptr_result_maybenull_ const OrtSequenceTypeInfo **out)'],['../struct_ort_api.html#af30becd08dbe55ebaf9b8051b7a88c9d',1,'OrtApi::ORT_API2_STATUS(GetMapKeyType, _In_ const OrtMapTypeInfo *map_type_info, _Out_ enum ONNXTensorElementDataType *out)'],['../struct_ort_api.html#acb1022b66dcded46c65ed817c4b05ebb',1,'OrtApi::ORT_API2_STATUS(GetMapValueType, _In_ const OrtMapTypeInfo *map_type_info, _Outptr_ OrtTypeInfo **type_info)'],['../struct_ort_api.html#a82d2196d511cdaf769a676d53fdcb2b0',1,'OrtApi::ORT_API2_STATUS(GetSequenceElementType, _In_ const OrtSequenceTypeInfo *sequence_type_info, _Outptr_ OrtTypeInfo **type_info)'],['../struct_ort_api.html#a3a492d2538741cbc331e02846582373e',1,'OrtApi::ORT_API2_STATUS(SessionEndProfiling, _In_ OrtSession *sess, _Inout_ OrtAllocator *allocator, _Outptr_ char **out)'],['../struct_ort_api.html#a1628547252796ff61758f16a094668d6',1,'OrtApi::ORT_API2_STATUS(SessionGetModelMetadata, _In_ const OrtSession *sess, _Outptr_ OrtModelMetadata **out)'],['../struct_ort_api.html#ab37f65b8f910b2e4722b6a390bd1aa55',1,'OrtApi::ORT_API2_STATUS(ModelMetadataGetProducerName, _In_ const OrtModelMetadata *model_metadata, _Inout_ OrtAllocator *allocator, _Outptr_ char **value)'],['../struct_ort_api.html#a28b140d8537367a2f6056d36c58d45eb',1,'OrtApi::ORT_API2_STATUS(ModelMetadataLookupCustomMetadataMap, _In_ const OrtModelMetadata *model_metadata, _Inout_ OrtAllocator *allocator, _In_ const char *key, _Outptr_result_maybenull_ char **value)'],['../struct_ort_api.html#ad281373314abf7587765ac13cc9187ed',1,'OrtApi::ORT_API2_STATUS(ModelMetadataGetCustomMetadataMapKeys, _In_ const OrtModelMetadata *model_metadata, _Inout_ OrtAllocator *allocator, _Outptr_result_buffer_maybenull_(*num_keys) char ***keys, _Out_ int64_t *num_keys)'],['../struct_ort_api.html#ae64aee26c77ae1c1a6690ac8150443f4',1,'OrtApi::ORT_API2_STATUS(GetAvailableProviders, _Outptr_ char ***out_ptr, _In_ int *provider_length)'],['../struct_ort_api.html#aa17d79f5cb3bcf780151680379c7b5ae',1,'OrtApi::ORT_API2_STATUS(ReleaseAvailableProviders, _In_ char **ptr, _In_ int providers_length)'],['../struct_ort_api.html#ab0e6ac5afd25344df3db889b5afe25e7',1,'OrtApi::ORT_API2_STATUS(GetStringTensorElementLength, _In_ const OrtValue *value, size_t index, _Out_ size_t *out)'],['../struct_ort_api.html#a00a19bec0a45cb0c3ce00760a4ef2f22',1,'OrtApi::ORT_API2_STATUS(GetStringTensorElement, _In_ const OrtValue *value, size_t s_len, size_t index, _Out_writes_bytes_all_(s_len) void *s)'],['../struct_ort_api.html#a16d587826fd8657e8c28e5bc94d40fa0',1,'OrtApi::ORT_API2_STATUS(FillStringTensorElement, _Inout_ OrtValue *value, _In_ const char *s, size_t index)'],['../struct_ort_api.html#ab341a112aa6ce2329783126dee376277',1,'OrtApi::ORT_API2_STATUS(AddSessionConfigEntry, _Inout_ OrtSessionOptions *options, _In_z_ const char *config_key, _In_z_ const char *config_value)'],['../struct_ort_api.html#ade780d57ae449113a15fc450c3d80888',1,'OrtApi::ORT_API2_STATUS(CreateAllocator, _In_ const OrtSession *sess, _In_ const OrtMemoryInfo *mem_info, _Outptr_ OrtAllocator **out)'],['../struct_ort_api.html#ae9ce0beef615b83faf564a8724099b8b',1,'OrtApi::ORT_API2_STATUS(BindInput, _Inout_ OrtIoBinding *binding_ptr, _In_ const char *name, _In_ const OrtValue *val_ptr)'],['../struct_ort_api.html#a7f5c396b5d08c146eda5959b43f3150b',1,'OrtApi::ORT_API2_STATUS(BindOutput, _Inout_ OrtIoBinding *binding_ptr, _In_ const char *name, _In_ const OrtValue *val_ptr)'],['../struct_ort_api.html#ad8e8edd0e0138f0f976af953b5f60a2b',1,'OrtApi::ORT_API2_STATUS(BindOutputToDevice, _Inout_ OrtIoBinding *binding_ptr, _In_ const char *name, _In_ const OrtMemoryInfo *val_ptr)'],['../struct_ort_api.html#a3ec8626dad4a0cf0f33a1eb000548c0e',1,'OrtApi::ORT_API2_STATUS(GetBoundOutputNames, _In_ const OrtIoBinding *binding_ptr, _In_ OrtAllocator *allocator, _Out_ char **buffer, _Out_writes_all_(count) size_t **lengths, _Out_ size_t *count)'],['../struct_ort_api.html#aaa0d47a5ce3d49fbf33074bf93ac9ce3',1,'OrtApi::ORT_API2_STATUS(GetBoundOutputValues, _In_ const OrtIoBinding *binding_ptr, _In_ OrtAllocator *allocator, _Out_writes_all_(output_count) OrtValue ***output, _Out_ size_t *output_count)'],['../struct_ort_api.html#a9fbb6fda866f1636c956c9ad77d67ddb',1,'OrtApi::ORT_API2_STATUS(TensorAt, _Inout_ OrtValue *value, const int64_t *location_values, size_t location_values_count, _Outptr_ void **out)'],['../struct_ort_api.html#a7010dd9892ddb934f5f6f900e479d21e',1,'OrtApi::ORT_API2_STATUS(CreateAndRegisterAllocator, _Inout_ OrtEnv *env, _In_ const OrtMemoryInfo *mem_info, _In_ const OrtArenaCfg *arena_cfg)'],['../struct_ort_api.html#a3e388de799b89d20baab8dd3e2f4e3fd',1,'OrtApi::ORT_API2_STATUS(SetLanguageProjection, _In_ const OrtEnv *ort_env, _In_ OrtLanguageProjection projection)'],['../struct_ort_api.html#a1220121b40b3221af2820216a3254c9d',1,'OrtApi::ORT_API2_STATUS(SessionGetProfilingStartTimeNs, _In_ const OrtSession *sess, _Outptr_ uint64_t *out)'],['../struct_ort_api.html#a94238167c78aedc2bcf5422c5f9c5666',1,'OrtApi::ORT_API2_STATUS(SetGlobalIntraOpNumThreads, _Inout_ OrtThreadingOptions *tp_options, int intra_op_num_threads)'],['../struct_ort_api.html#ac7369ba1752fa996cfe4526e1a3712dd',1,'OrtApi::ORT_API2_STATUS(SetGlobalSpinControl, _Inout_ OrtThreadingOptions *tp_options, int allow_spinning)'],['../struct_ort_api.html#a95d7330de2ab52342cced007301c8420',1,'OrtApi::ORT_API2_STATUS(AddInitializer, _Inout_ OrtSessionOptions *options, _In_z_ const char *name, _In_ const OrtValue *val)'],['../struct_ort_api.html#a6e774a7d370bc7ea8b733e269758c8a8',1,'OrtApi::ORT_API2_STATUS(CreateEnvWithCustomLoggerAndGlobalThreadPools, OrtLoggingFunction logging_function, _In_opt_ void *logger_param, OrtLoggingLevel logging_level, _In_ const char *logid, _In_ const struct OrtThreadingOptions *tp_options, _Outptr_ OrtEnv **out)'],['../struct_ort_api.html#a6ddfaadb77a6c541adb3f04a9794723c',1,'OrtApi::ORT_API2_STATUS(SessionOptionsAppendExecutionProvider_CUDA, _In_ OrtSessionOptions *options, _In_ const OrtCUDAProviderOptions *cuda_options)'],['../struct_ort_api.html#a2a02ad6b7298cba84d5c345f05159eea',1,'OrtApi::ORT_API2_STATUS(SessionOptionsAppendExecutionProvider_ROCM, _In_ OrtSessionOptions *options, _In_ const OrtROCMProviderOptions *rocm_options)'],['../struct_ort_api.html#abc485f58d9ffbfe24b03d4b4281de1e0',1,'OrtApi::ORT_API2_STATUS(SessionOptionsAppendExecutionProvider_OpenVINO, _In_ OrtSessionOptions *options, _In_ const OrtOpenVINOProviderOptions *provider_options)'],['../struct_ort_api.html#a25c927256ebf877c659c87546f91457b',1,'OrtApi::ORT_API2_STATUS(SetGlobalDenormalAsZero, _Inout_ OrtThreadingOptions *tp_options)'],['../struct_ort_api.html#a03211b4eb90ceee0184414713eb3107e',1,'OrtApi::ORT_API2_STATUS(CreateArenaCfg, _In_ size_t max_mem, int arena_extend_strategy, int initial_chunk_size_bytes, int max_dead_bytes_per_chunk, _Outptr_ OrtArenaCfg **out)'],['../struct_ort_api.html#aab9dadd2ae578847e6493a0f4f5d1832',1,'OrtApi::ORT_API2_STATUS(ModelMetadataGetGraphDescription, _In_ const OrtModelMetadata *model_metadata, _Inout_ OrtAllocator *allocator, _Outptr_ char **value)'],['../struct_ort_api.html#aa25d6e818669addf08233b980a386a9e',1,'OrtApi::ORT_API2_STATUS(SessionOptionsAppendExecutionProvider_TensorRT, _In_ OrtSessionOptions *options, _In_ const OrtTensorRTProviderOptions *tensorrt_options)'],['../struct_ort_api.html#ae262b31114cc0786c80f7d62694e46cf',1,'OrtApi::ORT_API2_STATUS(SetCurrentGpuDeviceId, _In_ int device_id)'],['../struct_ort_api.html#abbdad7f358dcba1bf88f7efd50611868',1,'OrtApi::ORT_API2_STATUS(GetCurrentGpuDeviceId, _In_ int *device_id)']]]
];
